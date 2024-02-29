

// search functionssssssssss

const loadedData = async (search) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}

const displayPhones = (phones) => {
    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.innerHTML = '';

    phones = phones.slice(0,12);

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
                            <button class="btn bg-blue-500 hover:bg-red-500 hover:text-white  text-base">Show Details</button>
                </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    })
}

//search button
const handleSearch = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    // searchField.value = '';

    loadedData(searchText);

}
// loadedData()