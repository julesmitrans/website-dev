const NavigationSidebar = (active) => {
    return(`
        <div class="list-group">
            <a class="list-group-item"
                href="#">
                <i class="fab fa-twitter"></i>
            </a>
            <a class="list-group-item ${active === 'home' ? 'active' : ''}"
                href="../HomeScreen/index1.html">
                <i class="fa fa-home"></i>
                <span class="d-none d-xl-inline">Home</span>
            </a>
            <a class="list-group-item ${active === 'explore' ? 'active' : ''}"
                href="../ExploreScreen/index1.html">
                <i class="fa fa-hashtag"></i>
                <span class="d-none d-xl-inline">Explore</span>
            </a>
            <a class="list-group-item ${active === 'notifications' ? 'active' : ''}"
                href="notifications.html">
                <i class="fa fa-bell"></i>
                <span class="d-none d-xl-inline">Notifications</span>
            </a>
            <a class="list-group-item ${active === 'messages' ? 'active' : ''}"
                href="messages.html">
                <i class="fa fa-envelope"></i>
                <span class="d-none d-xl-inline">Messages</span>
            </a>
            <a class="list-group-item ${active === 'bookmarks' ? 'active' : ''}"
                href="bookmarks.html">
                <i class="fa fa-bookmark"></i>
                <span class="d-none d-xl-inline">Bookmarks</span>
            </a>
            <a class="list-group-item ${active === 'lists' ? 'active' : ''}"
                href="lists.html">
                <i class="fa fa-list"></i>
                <span class="d-none d-xl-inline">Lists</span>
            </a>
            <a class="list-group-item ${active === 'profile' ? 'active' : ''}"
                href="profile.html">
                <i class="fa fa-user"></i>
                <span class="d-none d-xl-inline">Profile</span>
            </a>
            <a class="list-group-item ${active === 'more' ? 'active' : ''}"
                href="more.html">
                <span class="fa-stack" style="font-size: 0.5em">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-ellipsis-h fa-inverse fa-stack-1x"></i>
                </span>
                <span class="d-none d-xl-inline">More</span>
            </a>
        </div>
        <div class="d-grid mt-2">
            <a href="tweet.html"
               class="btn btn-primary btn-block rounded-pill">
                Tweet
            </a>
        </div>
    `);
}

export default NavigationSidebar;
