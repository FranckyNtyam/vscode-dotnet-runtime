/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export enum EventType {
    DotnetAcquisitionStart,
    DotnetSDKAcquisitionStart,
    DotnetRuntimeAcquisitionStart,
    DotnetAcquisitionCompleted,
    DotnetAcquisitionError,
    DotnetAcquisitionSuccessEvent,
    DotnetAcquisitionMessage,
    DotnetAcquisitionTest,
    DotnetAcquisitionAlreadyInstalled,
    DotnetAcquisitionInProgress
}
