import { BuildingList } from './components/BuildingList';
import { useFeatures } from './hooks/useFeatures';

export const FeaturesPage: React.FC = () => {

    const { buildings } = useFeatures();
    return (
        <div className="container">
            <h2>Available Buildings</h2>
            <BuildingList buildings={buildings}/>
        </div>
    )
}