import BaseAlert from "../components/BaseAlert";
import BaseBadge from "../components/BaseBadge";
import BaseButton from "../components/BaseButton";

// base-card
import BaseCard from "../components/base-card/BaseCard";
import Cardheader from "../components/base-card/CardHeader";
import CardBody from "../components/base-card/CardBody";
import CardFooter from "../components/base-card/CardFooter";
import CardOverlay from "../components/base-card/CardOverlay";

import BaseCarousel from "../components/base-carousel/BaseCarousel";
import CarouselSlide from "../components/base-carousel/CarouselSlide";
import SlideIndicator from "../components/base-carousel/SlideIndicator";
import CarouselInner from "../components/base-carousel/CarouselInner";
import CarouselCaption from "../components/base-carousel/CarouselCaption";

import BaseInput from "../components/BaseInput";
import BaseCheckbox from "../components/BaseCheckbox";
import BaseRadio from "../components/BaseRadio";
import BaseNavbar from "../components/BaseNavbar";

import BaseTab from "../components/base-tab/BaseTab";
import TabItem from "../components/base-tab/TabItem";
import TabContent from "../components/base-tab/TabContent";

import BaseProgress from "../components/BaseProgress";
import BaseClose from "../components/BaseClose";
import BaseModal from "../components/base-modal/BaseModal";
import ModalHeader from "../components/base-modal/ModalHeader";
import ModalBody from "../components/base-modal/ModalBody";
import ModalFooter from "../components/base-modal/ModalFooter";

import BaseSpinner from "../components/BaseSpinner";
import BaseDropdown from "../components/base-dropdown/BaseDropdown";
import DropdownMenu from "../components/base-dropdown/DropdownMenu";

export default {
    install(Vue) {
        Vue.component(BaseAlert.name, BaseAlert);
        Vue.component(BaseBadge.name, BaseBadge);
        Vue.component(BaseButton.name, BaseButton);

        Vue.component(BaseCard.name, BaseCard);
        Vue.component(Cardheader.name, Cardheader);
        Vue.component(CardBody.name, CardBody);
        Vue.component(CardFooter.name, CardFooter);
        Vue.component(CardOverlay.name, CardOverlay);

        Vue.component(BaseCarousel.name, BaseCarousel);
        Vue.component(CarouselSlide.name, CarouselSlide);
        Vue.component(SlideIndicator.name, SlideIndicator);
        Vue.component(CarouselInner.name, CarouselInner);
        Vue.component(CarouselCaption.name,CarouselCaption);
        Vue.component(BaseInput.name, BaseInput);
        Vue.component(BaseCheckbox.name, BaseCheckbox);
        Vue.component(BaseRadio.name, BaseRadio);
        Vue.component(BaseNavbar.name, BaseNavbar);
        Vue.component(BaseTab.name, BaseTab);
        Vue.component(TabItem.name, TabItem);
        Vue.component(TabContent.name, TabContent);
        Vue.component(BaseProgress.name, BaseProgress);

        Vue.component(BaseClose.name, BaseClose);
        Vue.component(BaseModal.name, BaseModal);
        Vue.component(ModalHeader.name, ModalHeader);
        Vue.component(ModalBody.name, ModalBody);
        Vue.component(ModalFooter.name,ModalFooter);

        Vue.component(BaseSpinner.name, BaseSpinner);
        Vue.component(BaseDropdown.name, BaseDropdown);
        Vue.component(DropdownMenu.name, DropdownMenu);
    }
};
