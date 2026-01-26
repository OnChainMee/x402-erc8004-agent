export const abi = [
    {
        "type": "function",
        "name": "inspect",
        "inputs": [
            {
                "name": "_message",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "_options",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [
            {
                "name": "valid",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "error",
        "name": "InspectionFailed",
        "inputs": [
            {
                "name": "message",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "options",
                "type": "bytes",
                "internalType": "bytes"
            }
        ]
    }
];
export const code = "0x";
//# sourceMappingURL=IOAppMsgInspector.js.map