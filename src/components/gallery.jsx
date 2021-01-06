import React from 'react';
import ReactGallery from 'react-photo-gallery';

import '../css/gallery.css';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="gallery">
                <ReactGallery photos={PHOTO_SET} />
            </div>
        )
    }
}

const PHOTO_SET = [
    {
      src: 'https://jacksonvillecommunityband.s3.us-east-2.amazonaws.com/20190702_201032.jpg',
      width: 3,
      height: 2,
      key: 1
    },
    {
      src: 'https://jacksonvillecommunityband.s3.us-east-2.amazonaws.com/20190702_200818.jpg',
      width: 2,
      height: 1,
      key: 2
    },
    {
        src: 'https://jacksonvillecommunityband.s3.us-east-2.amazonaws.com/20190702_201722.jpg',
        width: 3,
        height: 2,
        key: 3
      },
      {
        src: 'https://jacksonvillecommunityband.s3.us-east-2.amazonaws.com/20190702_200750.jpg',
        width: 3,
        height: 2,
        key: 4
      },
      {
        src: 'https://jacksonvillecommunityband.s3.us-east-2.amazonaws.com/20190702_200611.jpg',
        width: 4,
        height: 3,
        key: 5
      },

      {
        src: 'https://jacksonvillecommunityband.s3.us-east-2.amazonaws.com/20190702_200658.jpg',
        width: 2,
        height: 1,
        key: 6
      },
      {
        src: 'https://jacksonvillecommunityband.s3.us-east-2.amazonaws.com/20190702_200636.jpg',
        width: 2,
        height: 1,
        key: 7
      },
      {
        src: 'https://jacksonvillecommunityband.s3.us-east-2.amazonaws.com/20190625_201154.jpg',
        width: 4,
        height: 3,
        key: 8
      },
      {
        src: 'https://jacksonvillecommunityband.s3.us-east-2.amazonaws.com/20190702_200539.jpg',
        width: 4,
        height: 3,
        key: 9
      },
      {
        src: 'https://jacksonvillecommunityband.s3.us-east-2.amazonaws.com/20190702_195741.jpg',
        width: 4,
        height: 3,
        key: 10
      },
      {
        src: 'https://jacksonvillecommunityband.s3.us-east-2.amazonaws.com/20190702_200747.jpg',
        width: 1,
        height: 1,
        key: 11
      },
      {
        src: 'https://jacksonvillecommunityband.s3.us-east-2.amazonaws.com/20190706_111441.jpg',
        width: 4,
        height: 3,
        key: 12
      },
      {
        src: 'https://jacksonvillecommunityband.s3.us-east-2.amazonaws.com/20190702_200651.jpg',
        width: 4,
        height: 3,
        key: 13
      }
  ];

export default Gallery;
