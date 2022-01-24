import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit';
import { GiOpenTreasureChest } from 'react-icons/gi';

import { HiCursorClick } from 'react-icons/hi'
import { CoinsByClickingIcon, CoinsEarnedIcon, JoinChaosIcon, JoinOrderIcon, OrderUpgradeIcon } from '../../../public/icons/svg_components/icons';


const initialState = {

    /* Factions */
    'join_order': {
        type: 'factionJoin',
        skipBuyAll: true,
        icon: <JoinOrderIcon />,
        cost: 100000,
        name: 'Proof of Order',
        isBought: false,
        isUnlocked: true,
        effectText: 'The Order faction values high principles and stability, aligning yourself with the Order faction will greatly reward active gameplay and stability while also boosting magic efficiency.',
        tooltipText: 'Faction Join',
        multiplier: 2,
        isChecked: false
    },
    'join_chaos': {
        type: 'factionJoin',
        skipBuyAll: true,
        icon: <JoinChaosIcon />,
        cost: 100000,
        name: 'Proof of Chaos',
        isBought: false,
        isUnlocked: true,
        effectText: 'The Chaos faction embraces the total entropy of the universe, aligning yourself with the Chaos faction will greatly reward idle gameplay and benefit from random burst of fortune',
        tooltipText: 'Faction Join',
        multiplier: 2,
        isChecked: false
    },

    /* Faction Upgrades */
    'order_upgrade_1': {
        type: 'factionUpgrade',
        faction: 'order',
        tier: 1,
        icon: <OrderUpgradeIcon />,
        cost: 50e6,
        name: 'Stable Clicking',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increases click reward by 80% of your buildings production. Additionally increases base click reward by 5000',
        effectValue: 0,
        multiplier: [0.8, 5000],
        bonusType: 'add',
        isChecked: false
    },
    'order_upgrade_2': {
        type: 'factionUpgrade',
        faction: 'order',
        tier: 2,
        icon: <OrderUpgradeIcon />,
        cost: 500e6,
        name: 'Consistency',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase your production based on the amount of buildings you own',
        effectValue: 0,
        multiplier: 1,
        bonusType: 'mul',
        isChecked: false
    },

    /* Building Tiers */
    /* Farm */
    'farm_tier_1': {
        type: 'buildingTier',
        tier: 1,
        icon: 0,
        cost: 200,
        building: 'farm',
        amount: 5,
        name: 'Farm Upgrade I',
        unlockText: 'Build 5 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 100%',
        multiplier: 2,
        isChecked: false
    },
    'farm_tier_2': {
        type: 'buildingTier',
        tier: 2,
        icon: 0,
        cost: 6580,
        building: 'farm',
        amount: 25,
        name: 'Farm Upgrade II',
        unlockText: 'Build 25 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 200%',
        multiplier: 3,
        isChecked: false,
    },
    'farm_tier_3': {
        type: 'buildingTier',
        tier: 3,
        icon: 0,
        cost: 1.07e7,
        building: 'farm',
        amount: 75,
        name: 'Farm Upgrade III',
        unlockText: 'Build 75 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 300%',
        multiplier: 4,
        isChecked: false,
    },
    'farm_tier_4': {
        type: 'buildingTier',
        tier: 4,
        icon: 0,
        cost: 5.09e11,
        building: 'farm',
        amount: 100,
        name: 'Farm Upgrade IV',
        unlockText: 'Build 100 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 400%',
        multiplier: 5,
        isChecked: false,
    },
    'farm_tier_5': {
        type: 'buildingTier',
        tier: 5,
        icon: 0,
        cost: 6.895e14,
        building: 'farm',
        amount: 150,
        name: 'Farm Upgrade V',
        unlockText: 'Build 150 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 500%',
        multiplier: 6,
        isChecked: false,
    },
    'farm_tier_6': {
        type: 'buildingTier',
        tier: 6,
        icon: 0,
        cost: 9.716e20,
        building: 'farm',
        amount: 200,
        name: 'Farm Upgrade VI',
        unlockText: 'Build 200 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 400%',
        multiplier: 5,
        isChecked: false,
    },
    'farm_tier_7': {
        type: 'buildingTier',
        tier: 7,
        icon: 0,
        cost: 1.331e27,
        building: 'farm',
        amount: 300,
        name: 'Farm Upgrade VII',
        unlockText: 'Build 300 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 300%',
        multiplier: 4,
        isChecked: false,
    },
    'farm_tier_8': {
        type: 'buildingTier',
        tier: 8,
        icon: 0,
        cost: 1.787e33,
        building: 'farm',
        amount: 400,
        name: 'Farm Upgrade VIII',
        unlockText: 'Build 400 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 200%',
        multiplier: 3,
        isChecked: false,
    },
    'farm_tier_9': {
        type: 'buildingTier',
        tier: 9,
        icon: 0,
        cost: 2.36e39,
        building: 'farm',
        amount: 500,
        name: 'Farm Upgrade IX',
        unlockText: 'Build 500 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 100%',
        multiplier: 2,
        isChecked: false,
    },
    'farm_tier_10': {
        type: 'buildingTier',
        tier: 10,
        icon: 0,
        cost: 3.08e45,
        building: 'farm',
        amount: 600,
        name: 'Farm Upgrade X',
        unlockText: 'Build 600 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 200%',
        multiplier: 3,
        isChecked: false,
    },
    'farm_tier_11': {
        type: 'buildingTier',
        tier: 11,
        icon: 0,
        cost: 3.978e51,
        building: 'farm',
        amount: 700,
        name: 'Farm Upgrade XI',
        unlockText: 'Build 700 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 300%',
        multiplier: 4,
        isChecked: false,
    },

    /* Mine */

    'mine_tier_1': {
        type: 'buildingTier',
        tier: 1,
        icon: 0,
        cost: 2510,
        building: 'mine',
        amount: 5,
        name: 'Mine Upgrade I',
        unlockText: 'Build 5 Mines',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Mine production by 100%',
        multiplier: 2,
        isChecked: false,
    },
    'mine_tier_2': {
        type: 'buildingTier',
        tier: 2,
        icon: 0,
        cost: 82300,
        building: 'mine',
        amount: 25,
        name: 'Mine Upgrade II',
        unlockText: 'Build 25 Mines',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Mine production by 200%',
        multiplier: 3,
        isChecked: false,
    },
    'mine_tier_3': {
        type: 'buildingTier',
        tier: 3,
        icon: 0,
        cost: 1.338e8,
        building: 'mine',
        amount: 75,
        name: 'Mine Upgrade III',
        unlockText: 'Build 75 Mines',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Mine production by 300%',
        multiplier: 4,
        isChecked: false,
    },
    'mine_tier_4': {
        type: 'buildingTier',
        tier: 4,
        icon: 0,
        cost: 6.363e12,
        building: 'mine',
        amount: 100,
        name: 'Mine Upgrade IV',
        unlockText: 'Build 100 Mines',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Mine production by 400%',
        multiplier: 5,
        isChecked: false,
    },
    'mine_tier_5': {
        type: 'buildingTier',
        tier: 5,
        icon: 0,
        cost: 8.619e15,
        building: 'mine',
        amount: 150,
        name: 'Mine Upgrade V',
        unlockText: 'Build 150 Mines',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Mine production by 500%',
        multiplier: 6,
        isChecked: false,
    },
    'mine_tier_6': {
        type: 'buildingTier',
        tier: 6,
        icon: 0,
        cost: 1.215e22,
        building: 'mine',
        amount: 200,
        name: 'Mine Upgrade VI',
        unlockText: 'Build 200 Mines',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Mine production by 400%',
        multiplier: 5,
        isChecked: false,
    },
    'mine_tier_7': {
        type: 'buildingTier',
        tier: 7,
        icon: 0,
        cost: 1.664e28,
        building: 'mine',
        amount: 300,
        name: 'Mine Upgrade VII',
        unlockText: 'Build 300 Mines',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Mine production by 300%',
        multiplier: 4,
        isChecked: false,
    },
    'mine_tier_8': {
        type: 'buildingTier',
        tier: 8,
        icon: 0,
        cost: 2.233e34,
        building: 'mine',
        amount: 400,
        name: 'Mine Upgrade VIII',
        unlockText: 'Build 400 Mines',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Mine production by 200%',
        multiplier: 3,
        isChecked: false,
    },
    'mine_tier_9': {
        type: 'buildingTier',
        tier: 9,
        icon: 0,
        cost: 2.95e40,
        building: 'mine',
        amount: 500,
        name: 'Mine Upgrade IX',
        unlockText: 'Build 500 Mines',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Mine production by 100%',
        multiplier: 2,
        isChecked: false,
    },
    'mine_tier_10': {
        type: 'buildingTier',
        tier: 10,
        icon: 0,
        cost: 3.849e46,
        building: 'mine',
        amount: 600,
        name: 'Mine Upgrade X',
        unlockText: 'Build 600 Mines',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Mine production by 200%',
        multiplier: 3,
        isChecked: false,
    },
    'mine_tier_11': {
        type: 'buildingTier',
        tier: 11,
        icon: 0,
        cost: 4.973e52,
        building: 'mine',
        amount: 700,
        name: 'Mine Upgrade XI',
        unlockText: 'Build 700 Mines',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Mine production by 300%',
        multiplier: 4,
        isChecked: false,
    },

    /* Mill */
    'mill_tier_1': {
        type: 'buildingTier',
        tier: 1,
        icon: 0,
        cost: 12070,
        building: 'mill',
        amount: 5,
        name: 'Mill Upgrade I',
        unlockText: 'Build 5 Mills',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Mill production by 100%',
        multiplier: 2,
        isChecked: false,
    },
    'mill_tier_2': {
        type: 'buildingTier',
        tier: 2,
        icon: 0,
        cost: 395020,
        building: 'mill',
        amount: 25,
        name: 'Mill Upgrade II',
        unlockText: 'Build 25 Mills',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Mill production by 200%',
        multiplier: 3,
        isChecked: false,
    },
    'mill_tier_3': {
        type: 'buildingTier',
        tier: 3,
        icon: 0,
        cost: 6.421e8,
        building: 'mill',
        amount: 75,
        name: 'Mill Upgrade III',
        unlockText: 'Build 75 Mills',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Mill production by 300%',
        multiplier: 4,
        isChecked: false,
    },
    'mill_tier_4': {
        type: 'buildingTier',
        tier: 4,
        icon: 0,
        cost: 5.09e11,
        building: 'mill',
        amount: 100,
        name: 'Mill Upgrade IV',
        unlockText: 'Build 100 Mills',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Mill production by 400%',
        multiplier: 5,
        isChecked: false,
    },

    /* Blacksmith */
    'blacksmith_tier_1': {
        type: 'buildingTier',
        tier: 1,
        icon: 0,
        cost: 36200,
        building: 'blacksmith',
        amount: 5,
        name: 'Blacksmith Upgrade I',
        unlockText: 'Build 5 Blacksmiths',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Blacksmith production by 100%',
        multiplier: 2,
        isChecked: false,
    },
    'blacksmith_tier_2': {
        type: 'buildingTier',
        tier: 2,
        icon: 0,
        cost: 1.185e6,
        building: 'blacksmith',
        amount: 25,
        name: 'Blacksmith Upgrade II',
        unlockText: 'Build 25 Blacksmiths',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Blacksmith production by 200%',
        multiplier: 3,
        isChecked: false,
    },
    'blacksmith_tier_3': {
        type: 'buildingTier',
        tier: 3,
        icon: 0,
        cost: 1.926e9,
        building: 'blacksmith',
        amount: 75,
        name: 'Blacksmith Upgrade III',
        unlockText: 'Build 75 Blacksmiths',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Blacksmith production by 300%',
        multiplier: 4,
        isChecked: false,
    },
    'blacksmith_tier_4': {
        type: 'buildingTier',
        tier: 4,
        icon: 0,
        cost: 9.162e13,
        building: 'blacksmith',
        amount: 100,
        name: 'Blacksmith Upgrade IV',
        unlockText: 'Build 100 Blacksmiths',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Blacksmith production by 400%',
        multiplier: 5,
        isChecked: false,
    },

    /* Cathedral */
    'cathedral_tier_1': {
        type: 'buildingTier',
        tier: 1,
        icon: 0,
        cost: 112640,
        building: 'cathedral',
        amount: 5,
        name: 'Cathedral Upgrade I',
        unlockText: 'Build 5 Cathedrals',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Cathedral production by 100%',
        multiplier: 2,
        isChecked: false,
    },
    'cathedral_tier_2': {
        type: 'buildingTier',
        tier: 2,
        icon: 0,
        cost: 3.687e6,
        building: 'cathedral',
        amount: 25,
        name: 'Cathedral Upgrade II',
        unlockText: 'Build 25 Cathedrals',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Cathedral production by 200%',
        multiplier: 3,
        isChecked: false,
    },
    'cathedral_tier_3': {
        type: 'buildingTier',
        tier: 3,
        icon: 0,
        cost: 5.993e9,
        building: 'cathedral',
        amount: 75,
        name: 'Cathedral Upgrade III',
        unlockText: 'Build 75 Cathedrals',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Cathedral production by 300%',
        multiplier: 4,
        isChecked: false,
    },
    'cathedral_tier_4': {
        type: 'buildingTier',
        tier: 4,
        icon: 0,
        cost: 2.851e14,
        building: 'cathedral',
        amount: 100,
        name: 'Cathedral Upgrade IV',
        unlockText: 'Build 100 Cathedrals',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Cathedral production by 400%',
        multiplier: 5,
        isChecked: false,
    },

    /* Temple */
    'temple_tier_1': {
        type: 'buildingTier',
        tier: 1,
        icon: 0,
        cost: 764320,
        building: 'temple',
        amount: 5,
        name: 'Temple Upgrade I',
        unlockText: 'Build 5 Temples',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Temple production by 100%',
        multiplier: 2,
        isChecked: false,
    },
    'temple_tier_2': {
        type: 'buildingTier',
        tier: 2,
        icon: 0,
        cost: 2.502e7,
        building: 'temple',
        amount: 25,
        name: 'Temple Upgrade II',
        unlockText: 'Build 25 Temples',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Temple production by 200%',
        multiplier: 3,
        isChecked: false,
    },
    'temple_tier_3': {
        type: 'buildingTier',
        tier: 3,
        icon: 0,
        cost: 4.067e10,
        building: 'temple',
        amount: 75,
        name: 'Temple Upgrade III',
        unlockText: 'Build 75 Temples',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Temple production by 300%',
        multiplier: 4,
        isChecked: false,
    },
    'temple_tier_4': {
        type: 'buildingTier',
        tier: 4,
        icon: 0,
        cost: 1.934e15,
        building: 'temple',
        amount: 100,
        name: 'Temple Upgrade IV',
        unlockText: 'Build 100 Temples',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Temple production by 400%',
        multiplier: 5,
        isChecked: false,
    },

    /* Castle */
    'castle_tier_1': {
        type: 'buildingTier',
        tier: 1,
        icon: 0,
        cost: 8.89e6,
        building: 'castle',
        amount: 5,
        name: 'Castle Upgrade I',
        unlockText: 'Build 5 Castles',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Castle production by 100%',
        multiplier: 2,
        isChecked: false,
    },
    'castle_tier_2': {
        type: 'buildingTier',
        tier: 2,
        icon: 0,
        cost: 2.91e8,
        building: 'castle',
        amount: 25,
        name: 'Castle Upgrade II',
        unlockText: 'Build 25 Castles',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Castle production by 200%',
        multiplier: 3,
        isChecked: false,
    },
    'castle_tier_3': {
        type: 'buildingTier',
        tier: 3,
        icon: 0,
        cost: 4.73e11,
        building: 'castle',
        amount: 75,
        name: 'Castle Upgrade III',
        unlockText: 'Build 75 Castles',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Castle production by 300%',
        multiplier: 4,
        isChecked: false,
    },
    'castle_tier_4': {
        type: 'buildingTier',
        tier: 4,
        icon: 0,
        cost: 2.25e16,
        building: 'castle',
        amount: 100,
        name: 'Castle Upgrade IV',
        unlockText: 'Build 100 Castles',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Castle production by 400%',
        multiplier: 5,
        isChecked: false,
    },



    /* Manual Clicks */
    'manual_clicks_1': {
        type: 'manualClicks',
        tier: 1,
        icon: <HiCursorClick className='w-8 h-8' />,
        cost: 500,
        amount: 100,
        isBought: false,
        isUnlocked: false,
        name: 'Baby Clicker',
        unlockText: 'Click 100 times',
        effectText: 'Increase base clicking reward by 4',
        bonusType: 'baseAdd',
        multiplier: 4,
        isChecked: false,
    },
    'manual_clicks_2': {
        type: 'manualClicks',
        tier: 2,
        icon: <HiCursorClick className='w-8 h-8' />,
        cost: 5000,
        amount: 500,
        isBought: false,
        isUnlocked: false,
        name: 'A Clicking Start',
        unlockText: 'Click 500 times',
        effectText: 'Increase base clicking reward by 45',
        bonusType: 'baseAdd',
        multiplier: 45,
        isChecked: false,
    },
    'manual_clicks_3': {
        type: 'manualClicks',
        tier: 3,
        icon: <HiCursorClick className='w-8 h-8' />,
        cost: 5e6,
        amount: 2500,
        isBought: false,
        isUnlocked: false,
        name: 'Advanced Clicking',
        unlockText: 'Click 2500 times',
        effectText: 'Increase base clicking reward by 4950',
        bonusType: 'baseAdd',
        multiplier: 4950,
        isChecked: false,
    },
    'manual_clicks_4': {
        type: 'manualClicks',
        tier: 4,
        icon: <HiCursorClick className='w-8 h-8' />,
        cost: 5e9,
        amount: 10000,
        isBought: false,
        isUnlocked: false,
        name: 'Expert Clicking',
        unlockText: 'Click 10000 times',
        effectText: 'Increase base clicking reward by 500,000',
        bonusType: 'baseAdd',
        multiplier: 500000,
        isChecked: false,
    },

    /* Coins By Clicking */
    'coins_by_clicking_1': {
        type: 'coinsByClicking',
        tier: 1,
        icon: <CoinsByClickingIcon tier={1} className='w-8 h-8' />,
        cost: 10000,
        amount: 5000,
        isBought: false,
        isUnlocked: false,
        name: 'A Tiny Treasure',
        unlockText: 'Gain 5000 Coins by clicking in a single game',
        effectText: 'Increase clicking reward by 50%',
        bonusType: 'mul',
        multiplier: 1.5,
        isChecked: false,
    },
    'coins_by_clicking_2': {
        type: 'coinsByClicking',
        tier: 2,
        icon: <CoinsByClickingIcon className='w-8 h-8' />,
        cost: 5e6,
        amount: 500000,
        isBought: false,
        isUnlocked: false,
        name: 'A Small Treasure',
        unlockText: 'Gain 500000 Coins by clicking in a single game',
        effectText: 'Increase clicking reward by 50%',
        bonusType: 'mul',
        multiplier: 1.5,
        isChecked: false,
    },
    'coins_by_clicking_3': {
        type: 'coinsByClicking',
        tier: 3,
        icon: <CoinsByClickingIcon className='w-8 h-8' />,
        cost: 500e6,
        amount: 5e6,
        isBought: false,
        isUnlocked: false,
        name: 'A Bigger Treasure',
        unlockText: 'Gain 5M Coins by clicking in a single game',
        effectText: 'Increase clicking reward by 100%',
        bonusType: 'mul',
        multiplier: 2,
        isChecked: false,
    },
    'coins_by_clicking_4': {
        type: 'coinsByClicking',
        tier: 4,
        icon: <CoinsByClickingIcon className='w-8 h-8' />,
        cost: 1e11,
        amount: 5e9,
        isBought: false,
        isUnlocked: false,
        name: 'A Huge Treasure',
        unlockText: 'Gain 5B Coins by clicking in a single game',
        effectText: 'Increase clicking reward by 50%',
        bonusType: 'mul',
        multiplier: 1.5,
        isChecked: false,
    },

    /* Coins Earned */
    'coins_earned_1': {
        type: 'coinsEarned',
        tier: 1,
        icon: <CoinsEarnedIcon className='w-8 h-8' />,
        cost: 50000,
        amount: 10000,
        isBought: false,
        isUnlocked: false,
        name: 'Coin Enthusiast',
        unlockText: 'Earn 100,000 Coins',
        effectText: 'Increase base clicking reward by 1% of production',
        effectValue: 0,
        bonusType: 'add',
        multiplier: 0.01,
        isChecked: false,
    },
    'coins_earned_2': {
        type: 'coinsEarned',
        tier: 2,
        icon: <CoinsEarnedIcon className='w-8 h-8' />,
        cost: 50e6,
        amount: 100e6,
        isBought: false,
        isUnlocked: false,
        name: 'Coin Collector',
        unlockText: 'Earn 100M Coins',
        effectText: 'Increase base clicking reward by 1% of production',
        effectValue: 0,
        bonusType: 'add',
        multiplier: 0.01,
        isChecked: false,
    },
    'coins_earned_3': {
        type: 'coinsEarned',
        tier: 3,
        icon: <CoinsEarnedIcon className='w-8 h-8' />,
        cost: 50e9,
        amount: 100e9,
        isBought: false,
        isUnlocked: false,
        name: 'Coin Hoarder',
        unlockText: 'Earn 100B Coins',
        effectText: 'Increase base clicking reward by 1% of production',
        effectValue: 0,
        bonusType: 'add',
        multiplier: 0.01,
        isChecked: false,
    },
    'coins_earned_4': {
        type: 'coinsEarned',
        tier: 3,
        icon: <CoinsEarnedIcon className='w-8 h-8' />,
        cost: 50e12,
        amount: 100e12,
        isBought: false,
        isUnlocked: false,
        name: 'Coin Warlord',
        unlockText: 'Earn 100T Coins',
        effectText: 'Increase base clicking reward by 1% of production',
        effectValue: 0,
        bonusType: 'add',
        multiplier: 0.01,
        isChecked: false,
    },

}

export const upgradesSlice = createSlice({
    name: 'upgrades',
    initialState,
    reducers: {
        checkAllUpgrades: (state, action) => {
            const { buildings } = action.payload;
            const { player } = action.payload;
            const { upgrades } = action.payload;

            Object.entries(state).map((upgrade) => {
                switch (upgrade[1].type) {


                    /* Faction */
                    case 'factionJoin':
                        if (player.faction !== 'none' && upgrade[1].isUnlocked) {
                            upgrade[1].isUnlocked = false;
                            return;
                        }
                        break;

                    /* Faction Upgrades */
                    case 'factionUpgrade':
                        if (player.faction !== upgrade[1].faction || upgrade[1].isUnlocked) return;
                        if (upgrade[1].faction === 'order') {
                            switch (upgrade[1].tier) {
                                case 1:
                                    upgrade[1].isUnlocked = true;
                                    break;
                                case 2:
                                    /*Object.entries(state).map(factionUpgrade => {
                                        if(factionUpgrade[1].tier !== 1 || factionUpgrade[1].faction !== 'order') return;
                                        if(!factionUpgrade[1].isBought) return;
                                        upgrade[1].isUnlocked = true;
                                    });*/
                                    upgrade[1].isUnlocked = true;
                                    break;

                                default:
                                    break;
                            }
                        } else if (upgrade[1].faction === 'chaos') {

                        }


                    /* Building Tiers */
                    case 'buildingTier':
                        if (!upgrade[1].isUnlocked && buildings) {
                            Object.entries(buildings).map(building => {
                                if (building[1].name.toLowerCase() !== upgrade[1].building) return;
                                upgrade[1].icon = building[1].icon;
                                if (building[1].amount < upgrade[1].amount) return;
                                upgrade[1].isUnlocked = true;
                            })
                        }
                        break;

                    /* Manual Clicks */
                    case 'manualClicks':
                        if (!upgrade[1].isUnlocked && player) {
                            if (upgrade[1].amount > player.statistics.manualClicks.value) return;
                            upgrade[1].isUnlocked = true;
                        }
                        break;

                    /* Coins By Clicking */
                    case 'coinsByClicking':
                        if (!upgrade[1].isUnlocked && player) {
                            if (upgrade[1].amount > player.statistics.coinsByClicking.value) return;
                            upgrade[1].isUnlocked = true;
                        }
                        break;

                    /* Coins Earned */
                    case 'coinsEarned':
                        if (!upgrade[1].isUnlocked && player) {
                            if (upgrade[1].amount > player.statistics.coinsEarned.value) return;
                            upgrade[1].isUnlocked = true;
                        }
                        break;


                    default:
                        break;
                }
            })
        },
        buyUpgrade: (state, action) => {
            const upgradeToUnlock = action.payload;
            Object.entries(state).map(upgrade => {
                if (upgrade[1].name !== upgradeToUnlock.name) return;
                upgrade[1].isBought = true;
            })
        },
        setUpgradeChecked: (state, action) => {
            const upgradeToCheck = action.payload;
            Object.entries(state).map(upgrade => {
                if (upgrade[1].name !== upgradeToCheck.name) return;
                upgrade[1].isChecked = true;
            })
        },
        setCoins: (state, action) => {
            state.coins = action.payload;
        },
        updateEffectValue: (state, action) => {
            const { upgradeToCheck } = action.payload;
            const { value } = action.payload
            Object.entries(state).map(upgrade => {
                if (upgrade[1].name !== upgradeToCheck.name) return;
                if (upgrade[1].effectValue === value && upgrade[1].effectValue !== 0) return;
                upgrade[1].effectValue = value;
            })

        },

    },
})

// Action creators are generated for each case reducer function
export const { checkAllUpgrades, updateEffectValue, buyUpgrade, setUpgradeChecked } = upgradesSlice.actions

export default upgradesSlice.reducer
