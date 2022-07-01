import { Player } from '@lottiefiles/react-lottie-player';

export default function Lottie({lottie_object,style}) {
    return (
        <Player
            src={lottie_object}
            renderer="svg"
            style={style||{ height: '300px', width: '300px' }}
        ></Player>
    )
}
