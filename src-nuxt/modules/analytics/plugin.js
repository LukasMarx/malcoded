const socket = new WebSocket('wss://malcoded.com/analytics');

const open = new Promise((resolve, reject) => {
  socket.onopen = () => {
    socket.send(JSON.stringify({ messageType: 'joinUser' }));
    resolve(socket);
  };
});

export default ({ app: { router } }) => {
  open.then(() => {
    console.log(router);
    socket.send(
      JSON.stringify({ messageType: 'navigation', payload: { projectId: '48238e83-87dd-4b4f-be48-26ea7c89e8e7', path: router.history.current.path } })
    );
    router.afterEach((to, from) => {
      socket.send(JSON.stringify({ messageType: 'navigation', payload: { projectId: '48238e83-87dd-4b4f-be48-26ea7c89e8e7', path: to.path } }));
    });
  });
};
