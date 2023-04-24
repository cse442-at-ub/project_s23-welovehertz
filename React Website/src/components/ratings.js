export default function ResiRatings(props){
    var CleanlinessRatingsList = []
    var CommunicationRatingsList = []
    var InteriorRatingsList = []
    var LocationRatingsList = []
    var PriceRatingsList = []
    var SafteyRatingsList = []

    for (let i = 0; i < props.length; i++){
        CleanlinessRatingsList.push(parseInt(props[i]["Cleanliness"]))
        CommunicationRatingsList.push(parseInt(props[i]["Communication"]))
        InteriorRatingsList.push(parseInt(props[i]["Interior"]))
        LocationRatingsList.push(parseInt(props[i]["Location"]))
        PriceRatingsList.push(parseInt(props[i]["Price"]))
        SafteyRatingsList.push(parseInt(props[i]["Safety"]))
    }

    const CleanlinessRating = (CleanlinessRatingsList.reduce((acc, c) => acc + c, 0))/CleanlinessRatingsList.length;
    const CommunicationRating = (CommunicationRatingsList.reduce((acc, c) => acc + c, 0))/CommunicationRatingsList.length;
    const InteriorRating = (InteriorRatingsList.reduce((acc, c) => acc + c, 0))/InteriorRatingsList.length;
    const LocationRating = (LocationRatingsList.reduce((acc, c) => acc + c, 0))/LocationRatingsList.length;
    const PriceRating = (PriceRatingsList.reduce((acc, c) => acc + c, 0))/PriceRatingsList.length;
    const SafteyRating = (SafteyRatingsList.reduce((acc, c) => acc + c, 0))/SafteyRatingsList.length;


    const dic = {
        "Cleanliness" : CleanlinessRating,
        "Communication" : CommunicationRating,
        "Interior" : InteriorRating,
        "Location" : LocationRating,
        "Price" : PriceRating,
        "Safety" : SafteyRating
    }

    return (dic)
}