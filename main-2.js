

// search functionssssssssss

const loadedData2 = async (search, isShowAll) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones2(phones, isShowAll);
}

const displayPhones2 = (phones, isShowAll) => {
    const phoneContainer = document.getElementById("phone-container2");
    const seeAllBtn = document.getElementById("seeAll-btn2")
    phoneContainer.innerHTML = '';

    if (phones.length >= 9 && !isShowAll) {
        seeAllBtn.classList.remove('hidden');
    }
    else {
        seeAllBtn.classList.add('hidden');
    }

    // works on show all btn

    if (!isShowAll) {
        phones = phones.slice(0, 9);
    }

    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.className = `card shadow-xl border-x-2 border-y-2 border-gray-300 hover:bg-slate-200 `;
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
            <img src="${phone.image}" alt="Phone" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title text-2xl">${phone.phone_name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, hic.</p>
                <div class="card-actions mt-4 ">
                    <button onclick="handleShowDetails('${phone.slug}')" class="btn bg-blue-500 hover:bg-red-500 hover:text-white 
                                text-base">Show Details</button>
                </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
    toggleSpinnerLoading2(false);
}

// showing phone details//

const handleShowDetails2 = async (id) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;

    console.log(phone);

    displayModalpurchase(phone);

}

//showing modal section

const displayModalpurchase = (phone) => {
    const phoneName = document.getElementById("phone-inner-price");
    phoneName.innerText = phone.name;

    const phoneContainer = document.getElementById("phone-container");

    phoneContainer.className = `font-normal text-sm mt-4 mb-4`;

    phoneContainer.innerHTML = `

        <img src="${phone.image}" alt="">

        <h3><span class="text-red-600 text-lg font-semibold gap-3">Brand<span>:</span></span>${phone?.brand}</h3>
        <h3><span class="text-red-600 text-lg font-semibold gap-3">Display-Size<span>:</span></span>${phone?.mainFeatures?.displaySize}</h3>
        <h3><span class="text-red-600 text-lg font-semibold gap-3">Memory<span>:</span></span>${phone?.mainFeatures?.memory}</h3>
        <h3><span class="text-red-600 text-lg font-semibold gap-3">Storage<span>:</span></span>${phone?.mainFeatures?.storage}</h3>
        <h3><span class="text-red-600 text-lg font-semibold gap-3">ChipSet<span>:</span></span>${phone?.mainFeatures?.chipSet}</h3>
        <h3><span class="text-red-600 text-lg font-semibold gap-3">Sensors<span>:</span></span>${phone?.mainFeatures?.sensors}</h3>

    `;

    // display_modal2.showModal();
    my_modal_5.showModal()

}

//search button
const handleSearch2 = (isShowAll) => {

    const searchField = document.getElementById("search-field2");
    const searchText = searchField.value;
    console.log(searchText);
    // searchField.value = '';
    toggleSpinnerLoading2(true);

    loadedData2(searchText, isShowAll);

}
// loadedData()

const toggleSpinnerLoading2 = (isLoading) => {
    const spinnerLoading = document.getElementById("loading-spinner2");
    if (isLoading) {
        spinnerLoading.classList.remove('hidden');
    }
    else {
        spinnerLoading.classList.add('hidden')
    }
}

// show all button

const handleShowAll2 = () => {
    handleSearch2(true);
}


// purchase section

// const purchasePhone = () => {

//     const hideMainScreen = document.getElementById("main-section");
//     hideMainScreen.classList.add('hidden');
//     const hideFooterScreen = document.getElementById("footer-section");
//     hideFooterScreen.classList.add('hidden');

//     const showPurchaseScreen = document.getElementById("purchase-main-section");
//     showPurchaseScreen.classList.remove('hidden');

// }

// const goBackToHome = () => {

//     const hideMainScreen = document.getElementById("main-section");
//     hideMainScreen.classList.remove('hidden');
//     const hideFooterScreen = document.getElementById("footer-section");
//     hideFooterScreen.classList.remove('hidden');

//     const showPurchaseScreen = document.getElementById("purchase-main-section");
//     showPurchaseScreen.classList.add('hidden');

// }