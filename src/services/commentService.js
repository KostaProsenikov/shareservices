import requester from '../infrastructure/requester'
import observer from '../infrastructure/observer';

export default {
    create: {
        send: data  => requester.post('appdata', 'comments', 'kinvery', data),
        fail: res => observer.trigger(observer.events.notification, res.responseJSON.message)
    },
    isOwner: {
        isOwnerOrAdmin: comment => {
            if( comment.author === sessionStorage.getItem('username')) {
                return true;
            }
            let roles = sessionStorage.getItem('userRoles').split(',');
            if(roles.includes('Admin') || roles.includes('Moderator')) {
                return true;
            }
            return false;
        }
    }
}