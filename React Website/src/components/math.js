export default function AverageRating(props){
    var Ratings = [] 

    for (let i = 0; i < props.length; i++){
        var temp = []
        temp.push(parseInt(props[i]["Cleanliness"]))
        temp.push(parseInt(props[i]["Communication"]))
        temp.push(parseInt(props[i]["Interior"]))
        temp.push(parseInt(props[i]["Location"]))
        temp.push(parseInt(props[i]["Price"]))
        temp.push(parseInt(props[i]["Safety"]))
        if (parseInt(props[i]["OverallRating"]) != 0){
            temp.push(parseInt(props[i]["OverallRating"]))
        }
        const total = temp.reduce((acc, c) => acc + c, 0);
        var s =  total / temp.length;
        Ratings.push(s)
    }

    const total = Ratings.reduce((acc, c) => acc + c, 0);

    return (Math.round(100*(total/Ratings.length))/100)
}