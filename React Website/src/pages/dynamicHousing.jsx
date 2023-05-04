import React from 'react';
import DynamicImage from './DynamicImage';

function HomePage() {
    const [imageSource, setImageSource] = useState(myHomePageImage);

    return (
        <div>
            <DynamicImage imageSource={imageSource} />
            <button onClick={() => setImageSource(anotherHomePageImage)}>
                Change Image
            </button>
        </div>
    );
}

function AboutPage() {
    const [imageSource, setImageSource] = useState(myAboutPageImage);

    return (
        <div>
            <DynamicImage imageSource={imageSource} />
            <button onClick={() => setImageSource(anotherAboutPageImage)}>
                Change Image
            </button>
        </div>
    );
}

export { HomePage, AboutPage };