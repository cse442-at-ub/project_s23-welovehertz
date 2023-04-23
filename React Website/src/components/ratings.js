export default function ResiRatings(props){
    var dic = {}

    dic["Cleanliness"] = props["Cleanliness"]
    dic["Price"] = props["Price"]
    dic["Communication"] = props["Communication"]
    dic["Location"] = props["Locationrating"]
    dic["Interior"] = props["Interior"]
    dic["Safety"] = props["Safety"]
    return (dic)
}