// enum for restricted set
export enum SelectedPage {
    Home = "home",
    Mission = "mission",
    Shop = "shop",
    AboutUs = "aboutus",
}
// Consumed at compile time to normal js don't need to think about it
export interface MissionType {
    icon: JSX.Element;
    title: string;
    description: string;
}
// Also consumed at compile time, doesn't want to behave currently
