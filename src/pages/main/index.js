import MainLayout from '../layout/MainLayout';
import SidebarRightLayout from "../layout/SidebarRightLayout";
import ListLayout from "../layout/ListLayout";
import SidebarLeftLayout from "../layout/SidebarLeftLayout";
import {NavbarLink} from "../layout/Header";

function Main() {
  return (
    <MainLayout>
        <div>main</div>
        <SidebarLeftLayout>
            <div>side left rank</div>
        </SidebarLeftLayout>
        <SidebarRightLayout>
            <div>side right rank</div>
        </SidebarRightLayout>
        <ListLayout>
            <NavbarLink to="/community"><button>community</button></NavbarLink>
            <div>Match List</div>
        </ListLayout>
    </MainLayout>
  );
}

export default Main;
