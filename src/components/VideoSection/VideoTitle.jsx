export const VideoTitle = ({title}) => {
    return (
      <h2 className={`${title=="Front end"?"bg-blue-300":title=="Back end"?"bg-yellow-300":"bg-green-400"} text-white font-bold text-3xl uppercase py-2 px-8 rounded-xl`}>
        {title}
      </h2>
    )
}

export default VideoTitle;