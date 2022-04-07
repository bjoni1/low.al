window.addEventListener("load", start, false);
var profileButton;
var wishlistButton;
var profile;
var wishlist;

function start() {
    profileButton = document.getElementById("profile-button");
    wishlistButton = document.getElementById("wishlist-button");
    profile = document.getElementById("profile");
    wishlist = document.getElementById("wishlist");

    profileButton.addEventListener("click", openProfile, false);
    wishlistButton.addEventListener("click", openWishlist, false);
}

function openProfile() {
    wishlistButton.classList.remove("tab-active");
    wishlist.classList.remove("wishlist-active");
    profileButton.classList.add("tab-active");
    profile.classList.add("profile-active");
}

function openWishlist() {
    profileButton.classList.remove("tab-active");
    profile.classList.remove("profile-active");
    wishlistButton.classList.add("tab-active");
    wishlist.classList.add("wishlist-active");
}