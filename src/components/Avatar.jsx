import AvatarImg from '../assets/img/avatar.jpg'

const Avatar = () => {
    return (
        <div className='avatar'>
            <div className='w-12 rounded-full'>
                <img src={AvatarImg} alt="avatar image" />
            </div>
        </div>
    );
};

export default Avatar;