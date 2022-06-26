import { Player } from '@lottiefiles/react-lottie-player';

export default function useLottie(lottie_object,style) {
    return (
        <Player
            autoplay
            loop
            src={lottie_object}
            style={style||{ height: '300px', width: '300px' }}
        ></Player>
    )
}
