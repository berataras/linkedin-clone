import {Sidebar} from "../components";
import {EventButton, Newest, Stats} from "../components/partials/Sidebar/Widgets";

function Home() {
  return (
    <div className="container pb-20">
      <Sidebar>
          <Stats />
          <Newest />
          <EventButton />
      </Sidebar>
    </div>
  )
}

export default Home;
