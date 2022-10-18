"use strict";

const Client = require("./lib/Client");

function TheDiscord(token, options) {
    return new Client(token, options);
}

TheDiscord.AutocompleteInteraction = require("./lib/structures/AutocompleteInteraction");
TheDiscord.Base = require("./lib/structures/Base");
TheDiscord.Bucket = require("./lib/util/Bucket");
TheDiscord.Call = require("./lib/structures/Call");
TheDiscord.CategoryChannel = require("./lib/structures/CategoryChannel");
TheDiscord.Channel = require("./lib/structures/Channel");
TheDiscord.CommandInteraction = require("./lib/structures/CommandInteraction");
TheDiscord.ComponentInteraction = require("./lib/structures/ComponentInteraction");
TheDiscord.Client = Client;
TheDiscord.Collection = require("./lib/util/Collection");
TheDiscord.Command = require("./lib/command/Command");
TheDiscord.CommandClient = require("./lib/command/CommandClient");
TheDiscord.Constants = require("./lib/Constants");
TheDiscord.DiscordHTTPError = require("./lib/errors/DiscordHTTPError");
TheDiscord.DiscordRESTError = require("./lib/errors/DiscordRESTError");
TheDiscord.ExtendedUser = require("./lib/structures/ExtendedUser");
TheDiscord.GroupChannel = require("./lib/structures/GroupChannel");
TheDiscord.Guild = require("./lib/structures/Guild");
TheDiscord.GuildChannel = require("./lib/structures/GuildChannel");
TheDiscord.GuildIntegration = require("./lib/structures/GuildIntegration");
TheDiscord.GuildPreview = require("./lib/structures/GuildPreview");
TheDiscord.GuildTemplate = require("./lib/structures/GuildTemplate");
TheDiscord.Interaction = require("./lib/structures/Interaction");
TheDiscord.Invite = require("./lib/structures/Invite");
TheDiscord.Member = require("./lib/structures/Member");
TheDiscord.Message = require("./lib/structures/Message");
TheDiscord.NewsChannel = require("./lib/structures/NewsChannel");
TheDiscord.NewsThreadChannel = require("./lib/structures/NewsThreadChannel");
TheDiscord.Permission = require("./lib/structures/Permission");
TheDiscord.PermissionOverwrite = require("./lib/structures/PermissionOverwrite");
TheDiscord.PingInteraction = require("./lib/structures/PingInteraction");
TheDiscord.PrivateChannel = require("./lib/structures/PrivateChannel");
TheDiscord.PrivateThreadChannel = require("./lib/structures/PrivateThreadChannel");
TheDiscord.PublicThreadChannel = require("./lib/structures/PublicThreadChannel");
TheDiscord.Relationship = require("./lib/structures/Relationship");
TheDiscord.RequestHandler = require("./lib/rest/RequestHandler");
TheDiscord.Role = require("./lib/structures/Role");
TheDiscord.SequentialBucket = require("./lib/util/SequentialBucket");
TheDiscord.Shard = require("./lib/gateway/Shard");
TheDiscord.SharedStream = require("./lib/voice/SharedStream");
TheDiscord.StageChannel = require("./lib/structures/StageChannel");
TheDiscord.StageInstance = require("./lib/structures/StageInstance");
TheDiscord.StoreChannel = require("./lib/structures/StoreChannel");
TheDiscord.TextChannel = require("./lib/structures/TextChannel");
TheDiscord.TextVoiceChannel = require("./lib/structures/TextVoiceChannel");
TheDiscord.ThreadChannel = require("./lib/structures/ThreadChannel");
TheDiscord.ThreadMember = require("./lib/structures/ThreadMember");
TheDiscord.UnavailableGuild = require("./lib/structures/UnavailableGuild");
TheDiscord.UnknownInteraction = require("./lib/structures/UnknownInteraction");
TheDiscord.User = require("./lib/structures/User");
TheDiscord.VERSION = require("./package.json").version;
TheDiscord.VoiceChannel = require("./lib/structures/VoiceChannel");
TheDiscord.VoiceConnection = require("./lib/voice/VoiceConnection");
TheDiscord.VoiceConnectionManager = require("./lib/voice/VoiceConnectionManager");
TheDiscord.VoiceState = require("./lib/structures/VoiceState");

module.exports = TheDiscord;
