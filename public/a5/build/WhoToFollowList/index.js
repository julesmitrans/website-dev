export default [
    {   avatarIcon: '../../images/java.png',
        userName: 'Java', handle: 'Java', },
    {   avatarIcon: '../../images/relativity.jpeg',
        userName: 'Relativity Space',
        handle: 'relativityspace', },
    {   avatarIcon: '../../images/virgin.png',
        userName: 'Virgin Galactic',
        handle: 'virgingalactic', },
    {   avatarIcon: '../../images/nasa.png',
        userName: 'NASA', handle: 'NASA', },
    {   avatarIcon: '../../images/tesla.png',
        userName: 'Tesla', handle: 'Tesla', }, ]

import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            <!-- continue here -->
            </ul>
`); }
