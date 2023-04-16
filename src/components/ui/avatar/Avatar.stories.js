import Avatar from "./Avatar";
import avatar from '../../../assets/avatar.webp';

export default {
    title: "Components/Avatar"
}

export function Avatars() {
    return (
        <>
            <Avatar src={avatar} alt='avatar'></Avatar>
            <Avatar />
            <Avatar />
        </>
    );
}