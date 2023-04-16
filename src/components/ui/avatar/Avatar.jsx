import { StyledAvatar } from "./styles";
import noAvatar from '../../../assets/no-avatar.png';

export default function Avatar({src, alt, ...props}) {
    const handleError = (evt) => {
        evt.target.src = {noAvatar};
    }

    return (
        <div>
            {src ? <StyledAvatar src={src} alt={alt} onError={handleError}/> : <StyledAvatar  src={noAvatar} alt={alt}/>}
        </div>
    );
}