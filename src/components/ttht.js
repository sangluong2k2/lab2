import tintuchoctap from "../data";
 
const ttht = {
    render() {
        return /*html*/`
        <h2 class="font-semibold text-2xl uppercase text-blue-800 my-4">TIN TỨC HỌC TẬP</h2>
        <div class="grid grid-cols-3 gap-8">
            ${tintuchoctap.map((post) => /* html */ `
                <div class="border p-4">
                    <a href="">
                        <img src="${post.img}" alt="" class="mx-auto" />
                    </a>
                    <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${post.title}</a></h3>                    
                    <p>${post.desc}</p>
                </div>
            `).join("")}
            
        </div>
        `;
    },
};
export default ttht;