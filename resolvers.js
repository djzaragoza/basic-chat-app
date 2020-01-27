let messages = [];

const resolvers = {
    messages: () => {
        return messages;
    },
    sendMessages:({DisplayName, message}) => {
        messages.push(`${DisplayName}: ${message}`);
        return true;
    },
};

module.exports = resolvers;

