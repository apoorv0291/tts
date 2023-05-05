import React from 'react';

export default function TTS() {
    return (
        <div>
            <audio
                controls
                source
                src="https://d2zn4hspiuleph.cloudfront.net/media-content/TEST_UID/ssml_text_and_image.mp3"
                type="audio/ogg"
                autoPlay
            ></audio>
            {/* <audio
                controls
                src="https://d2zn4hspiuleph.cloudfront.net/media-content/TEST_UID/ssml_text_and_image.mp3"
            >
                Download audio
            </audio> */}
        </div>
    );
}
