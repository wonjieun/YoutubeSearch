import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // const video = props.video;
    // const onVideoSelect = props.onVideoSelect;

    // console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;

    // 유저가 전체 요소를 클릭할 때마다 비디오 선택으로 다룬다
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;