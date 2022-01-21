import React, { forwardRef } from 'react';
import { CheckCircleIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'
import { useSnackbar, SnackbarContent } from "notistack";
import { AiFillTrophy, AiOutlineTrophy } from 'react-icons/ai';

// eslint-disable-next-line react/display-name
const AchievementNotification = forwardRef((props, ref) => {
    const { closeSnackbar } = useSnackbar();

    const handleDismiss = () => {
        closeSnackbar(props.id);
    };

    return (
        <SnackbarContent ref={ref}>
            <div className="max-w-sm w-full text-white bg-accent-blue border-white border-2 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="flex flex-row p-4">
                    <div className="">
                        <AiFillTrophy className="h-12 w-12 text-gold-yellow" aria-hidden="true" />
                    </div>
                    <div className="w-full">

                        <div className="flex flex-col w-full ml-3  pt-0.5">
                            <p className="text-lg font-medium ">
                                Achievement Unlocked!
                            </p>
                            <p className="mt-1 text-md ">
                                {props.message}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </SnackbarContent>
    );
});

export default AchievementNotification;