import { menuItems } from "@/utils/menuItems";
import HeaderComponent from "@/components/HeaderComponent";
import SubNavBar from "@/components/SubNavBar";

export default function ResearchFacilitiesLayout({ children }) {
    return (
        <>
            <SubNavBar />
            <HeaderComponent menuItems={menuItems} />
            {children}
        </>
    )
}