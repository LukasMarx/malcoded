self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function(cacheName) {
            // Return true if you want to remove this cache,
            // but remember that caches are shared across
            // the whole origin
          })
          .map(function(cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});

const NOTIFICATION_OPTION_NAMES = [
  'actions',
  'body',
  'dir',
  'icon',
  'lang',
  'renotify',
  'requireInteraction',
  'tag',
  'vibrate',
  'data'
];

self.addEventListener('push', event => {
  // if (!(self.Notification && self.Notification.permission === 'granted')) {
  //   return;
  // }

  let data;
  try {
    data = JSON.parse(event.data.text());
  } catch (e) {
    // If the string can't be parsed, display it verbatim.
    data = {
      notification: {
        title: data
      }
    };
  }

  if (!data.notification || !data.notification.title) {
    return;
  }
  const desc = data.notification;
  let options = {};
  NOTIFICATION_OPTION_NAMES.filter(name => desc.hasOwnProperty(name)).forEach(
    name => (options[name] = desc[name])
  );
  options.icon = 'media/images/' + options.icon + '/jpg/800';

  sendAnalyticsEvent('received', 'notification');

  event.waitUntil(self.registration.showNotification(desc.title, options));
});

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('notificationclick', event => {
  // close all notifications
  self.registration.getNotifications().then(function(notifications) {
    notifications.forEach(function(notification) {
      notification.close();
    });
  });

  sendAnalyticsEvent('click', 'notification');

  var promise = clients.matchAll().then(function(clis) {
    const notification = event.notification;
    var client = clis.find(function(c) {
      c.visibilityState === 'visible';
    });
    if (client !== undefined) {
      client.navigate(notification.data.url);
      client.focus();
    } else {
      // there are no visible windows. Open one.
      clients.openWindow(notification.data.url);
    }
  });
  event.waitUntil(promise);
});

var trackingId = 'UA-87372848-1';

function sendAnalyticsEvent(eventAction, eventCategory) {
  'use strict';

  if (!trackingId) {
    // We want this to be a safe method, so avoid throwing unless absolutely necessary.
    return Promise.resolve();
  }

  if (!eventAction && !eventCategory) {
    console.warn('sendAnalyticsEvent() called with no eventAction or ' + 'eventCategory.');
    // We want this to be a safe method, so avoid throwing unless absolutely necessary.
    return Promise.resolve();
  }

  return self.registration.pushManager
    .getSubscription()
    .then(function(subscription) {
      if (subscription === null) {
        throw new Error('No subscription currently available.');
      }

      // Create hit data
      var payloadData = {
        // Version Number
        v: 1,
        // Client ID
        cid: subscription.endpoint,
        // Tracking ID
        tid: trackingId,
        // Hit Type
        t: 'event',
        // Event Category
        ec: eventCategory,
        // Event Action
        ea: eventAction,
        // Event Label
        el: 'serviceworker'
      };

      // Format hit data into URI
      var payloadString = Object.keys(payloadData)
        .filter(function(analyticsKey) {
          return payloadData[analyticsKey];
        })
        .map(function(analyticsKey) {
          return analyticsKey + '=' + encodeURIComponent(payloadData[analyticsKey]);
        })
        .join('&');

      // Post to Google Analytics endpoint
      return fetch('https://www.google-analytics.com/collect', {
        method: 'post',
        body: payloadString
      });
    })
    .then(function(response) {
      if (!response.ok) {
        return response.text().then(function(responseText) {
          throw new Error('Bad response from Google Analytics:\n' + response.status);
        });
      } else {
      }
    })
    .catch(function(err) {
      console.warn('Unable to send the analytics event', err);
    });
}
