import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToMultiplier } from "../../redux/store/buildings";
import { addCoinsPerClickUpgrade, addCoinsPerSecondUpgrade, getCoinsPerClick, getCoinsPerSecond, setCoins, setFaction, updateCoinsPerClick, updateCoinsPerClickUpgrade, updateCoinsPerSecond, updateCoinsPerSecondUpgrade } from "../../redux/store/player";
import { buyUpgrade, updateEffectValue } from "../../redux/store/upgrades";
import Upgrade from "../Buttons/Upgrade";
import useInterval from "../Logic/Hooks/useInterval";

export default function UpgradesMenu(props) {

    const upgrades = useSelector(state => state.upgrades);
    const player = useSelector(state => state.player);
    const buildings = useSelector(state => state.buildings);
    const dispatch = useDispatch();


    let upgradesAmount = Object.entries(upgrades).length;
    let upgradesUnlocked = Object.entries(upgrades).filter(upgrade => upgrade[1].isBought).length;

    useInterval(() => {
        updateUpgradeValues();
    }, 100);


    function buyAll() {
        Object.entries(upgrades).map(upgrade => {
            if (!upgrade[1].isUnlocked || upgrade[1].isBought || upgrade[1].skipBuyAll) return;
            buy(upgrade[1]);
        });

    }


    function buy(upgrade) {
        if (player.coins < upgrade.cost) return;
        dispatch(setCoins(player.coins - upgrade.cost))
        dispatch(buyUpgrade(upgrade))

        switch (upgrade.type) {

            /* Faction */
            case 'factionJoin':
                if (player.faction !== 'none') return;
                dispatch(setFaction({ faction: upgrade.name.split(' ')[2].toLowerCase() }));
                break;

            /* Faction Upgrades */
            case 'factionUpgrade':
                if (upgrade.faction === 'order') {
                    switch (upgrade.tier) {
                        case 1:
                            dispatch(addCoinsPerClickUpgrade({
                                upgrade: upgrade,
                                value: upgrade.multiplier[0],
                                bonusType: 'mul'
                            }));
                            dispatch(addCoinsPerClickUpgrade({
                                upgrade: upgrade,
                                value: upgrade.multiplier[1] * getCoinsPerSecond(player),
                                bonusType: 'add',
                            }));

                            break;

                        default:
                            break;
                    }
                } else if (upgrade.faction === 'chaos') {

                }

            /* Building Tiers */
            case 'buildingTier':
                Object.entries(buildings).map(building => {
                    if (building[1].name.toLowerCase() !== upgrade.building) return;
                    dispatch(addToMultiplier({ name: building[1].name, amount: upgrade.multiplier }));
                })
                break;

            /* Manual Clicks */
            case 'manualClicks':
                dispatch(addCoinsPerClickUpgrade({
                    upgrade: upgrade,
                    bonusType: upgrade.bonusType,
                    value: upgrade.multiplier,
                }))
                break;

            /* Coins By Clicking */
            case 'coinsByClicking':
                dispatch(addCoinsPerClickUpgrade({
                    upgrade: upgrade,
                    bonusType: upgrade.bonusType,
                    value: upgrade.multiplier,
                }));
                break;

            /* Coins Earned */
            case 'coinsEarned':
                dispatch(addCoinsPerClickUpgrade({
                    upgrade: upgrade,
                    value: upgrade.multiplier * getCoinsPerSecond(player),
                    bonusType: 'add',
                }));
                break;

            default:
                break;
        }

    }


    function updateUpgradeValues() {
        Object.entries(upgrades).filter(upgrade => upgrade[1].isUnlocked).map(upgrade => {

            switch (upgrade[1].type) {



                case 'factionUpgrade':
                    if (upgrade[1].faction === 'order') {
                        switch (upgrade[1].tier) {
                            case 1:
                                dispatch(updateEffectValue({
                                    upgradeToCheck: upgrade[1],
                                    value: upgrade[1].multiplier[1] * getCoinsPerSecond(player),
                                }))
                                if (!upgrade[1].isBought) break;
                                dispatch(updateCoinsPerClickUpgrade({
                                    upgrade: upgrade[1],
                                    value: upgrade[1].multiplier[1] * getCoinsPerSecond(player),
                                    bonusType: 'add',
                                }));
                                break;

                            default:
                                break;
                        }
                    } else if (upgrade.faction === 'chaos') {
                        break;
                    }
                    break;

                /* Coins Earned */
                case 'coinsEarned':
                    dispatch(updateEffectValue({
                        upgradeToCheck: upgrade[1],
                        value: upgrade[1].multiplier * getCoinsPerSecond(player),
                    }));
                    if (!upgrade[1].isBought) break;
                    dispatch(updateCoinsPerClickUpgrade({
                        upgrade: upgrade[1],
                        value: upgrade[1].multiplier * getCoinsPerSecond(player),
                        bonusType: 'add',
                    }));
                    break;



                default:
                    break;
            }


        });
    }


    if (props.isSideBarOpen) {
        return <></>
    }

    return (
        <div className='flex flex-col relative items-center px-2 py-2 text-white'>
            <div className='flex mt-4 justify-center items-center  font-normal text-2xl bg-selected-grey rounded-md w-[237px] h-[60px]'>
                Upgrades
            </div>
            <div className='mt-4'>
                Purchased Upgrades: {upgradesUnlocked}/{upgradesAmount} ({(upgradesUnlocked / upgradesAmount * 100).toFixed(0)}%)
            </div>
            <button onClick={() => buyAll()}>
                <div className='mt-2 rounded-md bg-accent-blue px-2 py-0.5'>
                    BUY ALL
                </div>
            </button>

            <ul role='list' className='mt-2 grid h-[200px]  grid-cols-6 grid-rows-3  w-full overflow-auto'>
                {(upgrades) && Object.entries(upgrades).filter(
                    upgrade => upgrade[1].isUnlocked && !upgrade[1].isBought
                ).map(
                    upgrade => (

                        <li
                            key={upgrade[1].id}
                            className='max-w-min'
                        >
                            <Upgrade upgrade={upgrade[1]} buy={buy} />
                        </li>
                    )
                )}
            </ul>

            <div className='flex mt-2 justify-center items-center  text-md bg-selected-grey rounded-2xl w-[237px] h-[30px]'>
                Purchased Upgrades
            </div>

            <ul role='list' className='mt-2 grid h-[200px] gap-y-2 grid-cols-6  w-full overflow-auto'>
                {(upgrades) && Object.entries(upgrades).filter(
                    upgrade => upgrade[1].isBought
                ).map(
                    upgrade => (

                        <li
                            key={upgrade[1].id}
                            className='max-w-min'
                        >
                            <Upgrade upgrade={upgrade[1]} />
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}