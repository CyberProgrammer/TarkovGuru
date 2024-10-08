import
{
    CLOSE_NAV,
    TOGGLE_NAV,
    INCREASE_LEVEL,
    DECREASE_LEVEL,
    INCREASE_TASKS_COMPLETED,
    DECREASE_TASKS_COMPLETED,
    INCREASE_TASK_ITEMS_FOUND,
    DECREASE_TASK_ITEMS_FOUND,
    CHANGE_TRADER_FILTER,
    CHANGE_FILTER_BY, CHANGE_STATUS_FILTER
} from '../actionTypes/actionTypes';

import {TaskStatusFilter} from "@customTypes/types.ts";

// Action is used to send to the reducer

const toggleNav = () => {
    return {
        type: TOGGLE_NAV,
    };
};

const closeNav = () => {
    return {
        type: CLOSE_NAV,
    }
}

const increaseLevel = () => {
    return {
        type: INCREASE_LEVEL,
    }
}

const decreaseLevel = () => {
    return {
        type: DECREASE_LEVEL,
    }
}

// Task completion status
const increaseTasksCompleted = () => {
    return {
        type: INCREASE_TASKS_COMPLETED,
    }
}

const decreaseTasksCompleted = () => {
    return {
        type: DECREASE_TASKS_COMPLETED,
    }
}

// Task items status
const increaseTaskItemsFound = () => {
    return {
        type: INCREASE_TASK_ITEMS_FOUND,
    }
}

const decreaseTaskItemsFound = () => {
    return {
        type: DECREASE_TASK_ITEMS_FOUND,
    }
}

// Task filter status
const changeTraderFilter = (newTraderFilter: number) => {
    return {
        type: CHANGE_TRADER_FILTER,
        payload: newTraderFilter,
    }
}

// Status filter
const changeStatusFilter = (newStatusFilter: TaskStatusFilter) => {
    return{
        type: CHANGE_STATUS_FILTER,
        payload: newStatusFilter,
    }
}

const toggleFilterBy = (filter: boolean) => {
    return {
        type: CHANGE_FILTER_BY,
        payload: filter,
    }
}

export
{
    toggleNav,
    closeNav,
    increaseLevel, 
    decreaseLevel,
    increaseTasksCompleted,
    decreaseTasksCompleted,
    increaseTaskItemsFound,
    decreaseTaskItemsFound,
    changeTraderFilter,
    changeStatusFilter,
    toggleFilterBy,
};