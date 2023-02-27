
import style from '../../../styling/CoreValues.module.css';
import CoreValueItem from "./CoreValueItem.jsx";

import authenticityIcon from '../../../assets/icons/corevalues/authenticity.png'
import integrityIcon from '../../../assets/icons/corevalues/integrity.png'
import trustworthynessIcon from '../../../assets/icons/corevalues/trustworthy.png'
import focusIcon from '../../../assets/icons/corevalues/focus.png'
import qualtiyIcon from '../../../assets/icons/corevalues/focus.png'
import commitmentIcon from '../../../assets/icons/corevalues/commitment.png'
import responsibilityIcon from '../../../assets/icons/corevalues/responsibility.png'
import curiosityIcon from '../../../assets/icons/corevalues/learning.png'


export default function CoreValues(props) {
    console.log('core values', props);
    const coreValueArray = props.field_core_values?.split(',');
    console.log(coreValueArray);

    const coreValueIcons = {
        authenticity: authenticityIcon,
        integrity: integrityIcon,
        trustworthyness: trustworthynessIcon,
        focus: focusIcon,
        quality: qualtiyIcon,
        commitment: commitmentIcon,
        responsibility: responsibilityIcon,
        curiosity: curiosityIcon,
    };

    let coreValueImageUrl = '';
    // @ts-ignore
    const valueItems = coreValueArray?.map((item, index) => {
        const itemValueName = item.toLowerCase();
        for (let key in coreValueIcons) {
            if (key === item.trim().toLowerCase()) {
                // @ts-ignore
                coreValueImageUrl = coreValueIcons[key];
            }
        }
        return (
            <CoreValueItem key={index} title={item} src={coreValueImageUrl} />
        );
    });

    return (
        <section className={style.coreValueSection}>
            <div className={style.coreValueInner}>{valueItems}</div>
        </section>
    );
}
