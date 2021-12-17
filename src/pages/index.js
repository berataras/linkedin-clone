import {Content, Sidebar} from "../components";
import {EventButton, Newest, Stats} from "../components/partials/Sidebar/Widgets";
import {CreatePost, FilterPost, PostCard} from '../components/home/content/widgets'

function Home() {
    return (
        <div className="container home pb-20">
            <Sidebar>
                <Stats />
                <Newest />
                <EventButton />
            </Sidebar>
            <Content>
                <CreatePost />
                <FilterPost />
                <PostCard />
            </Content>
            <Sidebar>
                <Stats />
            </Sidebar>
        </div>
    )
}

export default Home;
