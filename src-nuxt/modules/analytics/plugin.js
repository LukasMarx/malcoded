import io from 'socket.io-client';
const socket = io('localhost:3001', { path: '/analytics' });

export default ({ app: { router } }) => {
  router.afterEach((to, from) => {
    socket.emit('navigation', { projectId: '48238e83-87dd-4b4f-be48-26ea7c89e8e7', path: to.path });
  });
};
