import React from 'react';
import './CatalogFilter.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';
import { ReactComponent as ClearImg } from '../../assets/images/clear.svg';

interface ICatalogFilterProps extends IPropsClassName {}

export const CatalogFilter: React.FC<ICatalogFilterProps> = ({ className }) => {
    const classname = `${className} CatalogFilter`;

    return (
        <div className={classname}>
            <div className="filter-header">
                <div>Filter</div>
                <ClearImg className="filter-clear" />
            </div>
            <div className="filter-section">
                <div className="filter-title">Main type:</div>
                <label>
                    <input
                        type="checkbox"
                        name="mainType"
                        value="backpack"
                    />{' '}
                    backpack
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="mainType"
                        value="bundle"
                    />{' '}
                    bundle
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="mainType"
                        value="contrail"
                    />{' '}
                    contrail
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="mainType"
                        value="emote"
                    />{' '}
                    emote
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="mainType"
                        value="glider"
                    />{' '}
                    glider
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="mainType"
                        value="outfit"
                    />{' '}
                    outfit
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="mainType"
                        value="pickaxe"
                    />{' '}
                    pickaxe
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="mainType"
                        value="shoes"
                    />{' '}
                    shoes
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="mainType"
                        value="sparks_bass"
                    />{' '}
                    sparks_bass
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="mainType"
                        value="sparks_drum"
                    />{' '}
                    sparks_drum
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="mainType"
                        value="sparks_guitar"
                    />{' '}
                    sparks_guitar
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="mainType"
                        value="sparks_microphone"
                    />{' '}
                    sparks_microphone
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="mainType"
                        value="vehicle_body"
                    />{' '}
                    vehicle_body
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="mainType"
                        value="wrap"
                    />{' '}
                    wrap
                </label>
            </div>

            <div className="filter-section">
                <div className="filter-title">Rarity:</div>
                <label>
                    <input
                        type="checkbox"
                        name="rarity"
                        value="COMMON"
                    />{' '}
                    COMMON
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="rarity"
                        value="Epic"
                    />{' '}
                    Epic
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="rarity"
                        value="LEGENDARY"
                    />{' '}
                    LEGENDARY
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="rarity"
                        value="RARE"
                    />{' '}
                    RARE
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="rarity"
                        value="UNCOMMON"
                    />{' '}
                    UNCOMMON
                </label>
            </div>

            <div className="filter-section">
                <div className="filter-title">Series:</div>
                <label>
                    <input
                        type="checkbox"
                        name="series"
                        value="Icon Series"
                    />{' '}
                    Icon Series
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="series"
                        value="MARVEL SERIES"
                    />{' '}
                    MARVEL SERIES
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="series"
                        value="undefined"
                    />{' '}
                    undefined
                </label>
            </div>

            <div className="filter-section">
                <div className="filter-title">Banner:</div>
                <label>
                    <input
                        type="checkbox"
                        name="banner"
                        value="1200 V-Bucks Off"
                    />{' '}
                    1200 V-Bucks Off
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="banner"
                        value="1300 V-Bucks Off"
                    />{' '}
                    1300 V-Bucks Off
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="banner"
                        value="2000 V-Bucks Off"
                    />{' '}
                    2000 V-Bucks Off
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="banner"
                        value="2200 V-Bucks Off"
                    />{' '}
                    2200 V-Bucks Off
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="banner"
                        value="3200 V-Bucks Off"
                    />{' '}
                    3200 V-Bucks Off
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="banner"
                        value="900 V-Bucks Off"
                    />{' '}
                    900 V-Bucks Off
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="banner"
                        value="Reactive Back Bling!"
                    />{' '}
                    Reactive Back Bling!
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="banner"
                        value="undefined"
                    />{' '}
                    undefined
                </label>
            </div>

            <div className="filter-section">
                <div className="filter-title">Priority:</div>
                <label>
                    <input
                        type="checkbox"
                        name="priority"
                        value="-1"
                    />{' '}
                    -1
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="priority"
                        value="-2"
                    />{' '}
                    -2
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="priority"
                        value="-3"
                    />{' '}
                    -3
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="priority"
                        value="-4"
                    />{' '}
                    -4
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="priority"
                        value="-5"
                    />{' '}
                    -5
                </label>
            </div>
        </div>
    );
};
