import myImage from "../resident-hall-photos"

const [imageSource, setImageSource] = useState(myImage);
//<img src={imageSource} alt="Dymanic imgae" />

<button onClick={() => setImageSource(anotherImage)}>
    change Image
</button>


