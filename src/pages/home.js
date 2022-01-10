import Banner from "../components/banner";
import hdsv from "../components/hdsv";
import ttht from "../components/ttht";

const HomePage = {
    render() {
        return /* html */`
            <div class="banner">
                ${Banner.render()}
            </div>
            <div>
                ${ttht.render()}
            </div>
            <div>
                ${hdsv.render()}
            </div>
        `;
    },
};
export default HomePage;