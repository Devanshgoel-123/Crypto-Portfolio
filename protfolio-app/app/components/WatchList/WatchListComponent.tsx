import ListRow from "./WatchListRow";
import WatchListTitle from "./WatchListTitle";

export default function WatchListComponent(){
  return(
    <>
    <div className="flex flex-col justify-items-center space-y-5">
        <h2 className="text-center text-xl text-white font-sans font-extrabold">WatchList</h2>
        <WatchListTitle/>
        
        <div className="space-y-4">
        <ListRow/>
        <ListRow/>
        <ListRow/>
        <ListRow/>
        <ListRow/>
        <ListRow/>
        <ListRow/>
        <ListRow/>
        <ListRow/>
        <ListRow/>
        <ListRow/>
        <ListRow/>
        <ListRow/>
        <ListRow/>
        <ListRow/>
        
        </div>

    </div>
    </>
  )
}