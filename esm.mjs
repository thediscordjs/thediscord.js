import TheDiscord from "./index.js";

export default function(token, options) {
  return new TheDiscord.Client(token, options);
}

export const {
  AutocompleteInteraction,
  Base,
  Bucket,
  Call,
  CategoryChannel,
  Channel,
  Client,
  Collection,
  Command,
  CommandClient,
  CommandInteraction,
  ComponentInteraction,
  Constants,
  DiscordHTTPError,
  DiscordRESTError,
  ExtendedUser,
  GroupChannel,
  Guild,
  GuildChannel,
  GuildIntegration,
  GuildPreview,
  GuildTemplate,
  Interaction,
  Invite,
  Member,
  Message,
  NewsChannel,
  NewsThreadChannel,
  Permission,
  PermissionOverwrite,
  PingInteraction,
  PrivateChannel,
  PrivateThreadChannel,
  PublicThreadChannel,
  Relationship,
  RequestHandler,
  Role,
  SequentialBucket,
  Shard,
  SharedStream,
  StageChannel,
  StageInstance,
  StoreChannel,
  TextChannel,
  TextVoiceChannel,
  ThreadChannel,
  ThreadMember,
  UnavailableGuild,
  UnknownInteraction,
  User,
  VERSION,
  VoiceChannel,
  VoiceConnection,
  VoiceConnectionManager,
  VoiceState
} = TheDiscord;
