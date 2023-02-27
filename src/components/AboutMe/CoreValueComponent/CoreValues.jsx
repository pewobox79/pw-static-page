
import style from '../../../styling/CoreValues.module.css';
import CoreValueItem from "./CoreValueItem.jsx";


export default function CoreValues(props) {
    console.log('core values', props);
    const coreValueArray = props.coreValues?.split(',');
    console.log(coreValueArray);

    const coreValueIcons = {
        authenticity: '/assets/icons/corevalues/authenticity.png',
        integrity: '/assets/icons/corevalues/integrity.png',
        trustworthyness: '/assets/icons/corevalues/trustworthy.png',
        focus: '/assets/icons/corevalues/focus.png',
        quality: '/assets/icons/corevalues/quality.png',
        commitment: '/assets/icons/corevalues/commitment.png',
        responsibility: '/assets/icons/corevalues/responsibility.png',
        curiosity: '/assets/icons/corevalues/learning.png',
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
