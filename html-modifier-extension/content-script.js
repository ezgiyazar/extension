// Function to modify HTML dynamically
function modifyHTML() {
    /* EXAMPLE
    
        // Example: Change the background color of all <div> elements
        document.querySelectorAll('div').forEach(div => {
            div.style.backgroundColor = 'lightblue';
        });
    
        // Example: Add text to a specific element
        let target = document.getElementById('target-id');
        if (target) {
            target.textContent = 'Modified by Extension!';
        }
     */

    const pages = document.querySelectorAll('[class*="outer_page"]');

    for (var i = 0; i < pages.length; i++) {
        const newpages = pages[i].getElementsByClassName('newpage');
        const promo_div = pages[i].getElementsByClassName('promo_div');
        if ( newpages[0]?.children[0]?.children[0]?.children[0]?.style) {
            console.log('FIRED FROM İF NEW : ' + newpages.length)
            newpages[0].children[0].children[0].children[0].style.opacity = 1;
        }
        if (promo_div != undefined && promo_div != null && promo_div.length != 0) {
               promo_div[0].remove();
            console.log('FIRED FROM İF PROMO : ' + promo_div.length)
        }
        /*         page.getElementsByClassName('newpage').forEach(newpage => {
                    newpage.children[0].children[0].children[0].style.opacity = 1;
                });
                page.getElementsByClassName('promo_div').forEach(promo => {
                    promo.remove();
                }); */
    }

    const ads = document.getElementsByClassName('between_page_portal_root')
    for (var i = 0; i < ads.length; i++) {
        ads[i].remove()
    }

}

// Observe changes to the DOM
const observer = new MutationObserver(() => {
    modifyHTML();
});

// Start observing the entire body for changes
observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true
});

// Perform an initial modification
modifyHTML();
