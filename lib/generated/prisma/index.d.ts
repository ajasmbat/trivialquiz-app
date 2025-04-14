
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model GameQuestion
 * 
 */
export type GameQuestion = $Result.DefaultSelection<Prisma.$GameQuestionPayload>
/**
 * Model References
 * 
 */
export type References = $Result.DefaultSelection<Prisma.$ReferencesPayload>
/**
 * Model GameScores
 * 
 */
export type GameScores = $Result.DefaultSelection<Prisma.$GameScoresPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Games
 * const games = await prisma.game.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Games
   * const games = await prisma.game.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameQuestion`: Exposes CRUD operations for the **GameQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameQuestions
    * const gameQuestions = await prisma.gameQuestion.findMany()
    * ```
    */
  get gameQuestion(): Prisma.GameQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.references`: Exposes CRUD operations for the **References** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more References
    * const references = await prisma.references.findMany()
    * ```
    */
  get references(): Prisma.ReferencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameScores`: Exposes CRUD operations for the **GameScores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameScores
    * const gameScores = await prisma.gameScores.findMany()
    * ```
    */
  get gameScores(): Prisma.GameScoresDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Game: 'Game',
    GameQuestion: 'GameQuestion',
    References: 'References',
    GameScores: 'GameScores'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "game" | "gameQuestion" | "references" | "gameScores"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      GameQuestion: {
        payload: Prisma.$GameQuestionPayload<ExtArgs>
        fields: Prisma.GameQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload>
          }
          findFirst: {
            args: Prisma.GameQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload>
          }
          findMany: {
            args: Prisma.GameQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload>[]
          }
          create: {
            args: Prisma.GameQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload>
          }
          createMany: {
            args: Prisma.GameQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload>[]
          }
          delete: {
            args: Prisma.GameQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload>
          }
          update: {
            args: Prisma.GameQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload>
          }
          deleteMany: {
            args: Prisma.GameQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload>[]
          }
          upsert: {
            args: Prisma.GameQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload>
          }
          aggregate: {
            args: Prisma.GameQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameQuestion>
          }
          groupBy: {
            args: Prisma.GameQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<GameQuestionCountAggregateOutputType> | number
          }
        }
      }
      References: {
        payload: Prisma.$ReferencesPayload<ExtArgs>
        fields: Prisma.ReferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencesPayload>
          }
          findFirst: {
            args: Prisma.ReferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencesPayload>
          }
          findMany: {
            args: Prisma.ReferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencesPayload>[]
          }
          create: {
            args: Prisma.ReferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencesPayload>
          }
          createMany: {
            args: Prisma.ReferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencesPayload>[]
          }
          delete: {
            args: Prisma.ReferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencesPayload>
          }
          update: {
            args: Prisma.ReferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencesPayload>
          }
          deleteMany: {
            args: Prisma.ReferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReferencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencesPayload>[]
          }
          upsert: {
            args: Prisma.ReferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencesPayload>
          }
          aggregate: {
            args: Prisma.ReferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferences>
          }
          groupBy: {
            args: Prisma.ReferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferencesCountArgs<ExtArgs>
            result: $Utils.Optional<ReferencesCountAggregateOutputType> | number
          }
        }
      }
      GameScores: {
        payload: Prisma.$GameScoresPayload<ExtArgs>
        fields: Prisma.GameScoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameScoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameScoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScoresPayload>
          }
          findFirst: {
            args: Prisma.GameScoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameScoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScoresPayload>
          }
          findMany: {
            args: Prisma.GameScoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScoresPayload>[]
          }
          create: {
            args: Prisma.GameScoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScoresPayload>
          }
          createMany: {
            args: Prisma.GameScoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameScoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScoresPayload>[]
          }
          delete: {
            args: Prisma.GameScoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScoresPayload>
          }
          update: {
            args: Prisma.GameScoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScoresPayload>
          }
          deleteMany: {
            args: Prisma.GameScoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameScoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameScoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScoresPayload>[]
          }
          upsert: {
            args: Prisma.GameScoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScoresPayload>
          }
          aggregate: {
            args: Prisma.GameScoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameScores>
          }
          groupBy: {
            args: Prisma.GameScoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameScoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameScoresCountArgs<ExtArgs>
            result: $Utils.Optional<GameScoresCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    game?: GameOmit
    gameQuestion?: GameQuestionOmit
    references?: ReferencesOmit
    gameScores?: GameScoresOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    questions: number
    GameScores: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | GameCountOutputTypeCountQuestionsArgs
    GameScores?: boolean | GameCountOutputTypeCountGameScoresArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameQuestionWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountGameScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameScoresWhereInput
  }


  /**
   * Count Type GameQuestionCountOutputType
   */

  export type GameQuestionCountOutputType = {
    references: number
  }

  export type GameQuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    references?: boolean | GameQuestionCountOutputTypeCountReferencesArgs
  }

  // Custom InputTypes
  /**
   * GameQuestionCountOutputType without action
   */
  export type GameQuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestionCountOutputType
     */
    select?: GameQuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameQuestionCountOutputType without action
   */
  export type GameQuestionCountOutputTypeCountReferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferencesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    score: number | null
  }

  export type GameSumAggregateOutputType = {
    score: number | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    userName: string | null
    topic: string | null
    score: number | null
    difficulty: string | null
    createdAt: Date | null
    image: string | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    topic: string | null
    score: number | null
    difficulty: string | null
    createdAt: Date | null
    image: string | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    userName: number
    topic: number
    score: number
    difficulty: number
    createdAt: number
    image: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    score?: true
  }

  export type GameSumAggregateInputType = {
    score?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    userName?: true
    topic?: true
    score?: true
    difficulty?: true
    createdAt?: true
    image?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    userName?: true
    topic?: true
    score?: true
    difficulty?: true
    createdAt?: true
    image?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    userName?: true
    topic?: true
    score?: true
    difficulty?: true
    createdAt?: true
    image?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    userName: string
    topic: string
    score: number
    difficulty: string
    createdAt: Date
    image: string
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    topic?: boolean
    score?: boolean
    difficulty?: boolean
    createdAt?: boolean
    image?: boolean
    questions?: boolean | Game$questionsArgs<ExtArgs>
    GameScores?: boolean | Game$GameScoresArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    topic?: boolean
    score?: boolean
    difficulty?: boolean
    createdAt?: boolean
    image?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    topic?: boolean
    score?: boolean
    difficulty?: boolean
    createdAt?: boolean
    image?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    userName?: boolean
    topic?: boolean
    score?: boolean
    difficulty?: boolean
    createdAt?: boolean
    image?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "topic" | "score" | "difficulty" | "createdAt" | "image", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Game$questionsArgs<ExtArgs>
    GameScores?: boolean | Game$GameScoresArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      questions: Prisma.$GameQuestionPayload<ExtArgs>[]
      GameScores: Prisma.$GameScoresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userName: string
      topic: string
      score: number
      difficulty: string
      createdAt: Date
      image: string
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends Game$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Game$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    GameScores<T extends Game$GameScoresArgs<ExtArgs> = {}>(args?: Subset<T, Game$GameScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameScoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly userName: FieldRef<"Game", 'String'>
    readonly topic: FieldRef<"Game", 'String'>
    readonly score: FieldRef<"Game", 'Int'>
    readonly difficulty: FieldRef<"Game", 'String'>
    readonly createdAt: FieldRef<"Game", 'DateTime'>
    readonly image: FieldRef<"Game", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.questions
   */
  export type Game$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    where?: GameQuestionWhereInput
    orderBy?: GameQuestionOrderByWithRelationInput | GameQuestionOrderByWithRelationInput[]
    cursor?: GameQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameQuestionScalarFieldEnum | GameQuestionScalarFieldEnum[]
  }

  /**
   * Game.GameScores
   */
  export type Game$GameScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScores
     */
    select?: GameScoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScores
     */
    omit?: GameScoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoresInclude<ExtArgs> | null
    where?: GameScoresWhereInput
    orderBy?: GameScoresOrderByWithRelationInput | GameScoresOrderByWithRelationInput[]
    cursor?: GameScoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScoresScalarFieldEnum | GameScoresScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model GameQuestion
   */

  export type AggregateGameQuestion = {
    _count: GameQuestionCountAggregateOutputType | null
    _avg: GameQuestionAvgAggregateOutputType | null
    _sum: GameQuestionSumAggregateOutputType | null
    _min: GameQuestionMinAggregateOutputType | null
    _max: GameQuestionMaxAggregateOutputType | null
  }

  export type GameQuestionAvgAggregateOutputType = {
    correctAnswer: number | null
  }

  export type GameQuestionSumAggregateOutputType = {
    correctAnswer: number | null
  }

  export type GameQuestionMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    question: string | null
    correctAnswer: number | null
    explanation: string | null
  }

  export type GameQuestionMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    question: string | null
    correctAnswer: number | null
    explanation: string | null
  }

  export type GameQuestionCountAggregateOutputType = {
    id: number
    gameId: number
    question: number
    answers: number
    correctAnswer: number
    explanation: number
    _all: number
  }


  export type GameQuestionAvgAggregateInputType = {
    correctAnswer?: true
  }

  export type GameQuestionSumAggregateInputType = {
    correctAnswer?: true
  }

  export type GameQuestionMinAggregateInputType = {
    id?: true
    gameId?: true
    question?: true
    correctAnswer?: true
    explanation?: true
  }

  export type GameQuestionMaxAggregateInputType = {
    id?: true
    gameId?: true
    question?: true
    correctAnswer?: true
    explanation?: true
  }

  export type GameQuestionCountAggregateInputType = {
    id?: true
    gameId?: true
    question?: true
    answers?: true
    correctAnswer?: true
    explanation?: true
    _all?: true
  }

  export type GameQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameQuestion to aggregate.
     */
    where?: GameQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameQuestions to fetch.
     */
    orderBy?: GameQuestionOrderByWithRelationInput | GameQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameQuestions
    **/
    _count?: true | GameQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameQuestionMaxAggregateInputType
  }

  export type GetGameQuestionAggregateType<T extends GameQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateGameQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameQuestion[P]>
      : GetScalarType<T[P], AggregateGameQuestion[P]>
  }




  export type GameQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameQuestionWhereInput
    orderBy?: GameQuestionOrderByWithAggregationInput | GameQuestionOrderByWithAggregationInput[]
    by: GameQuestionScalarFieldEnum[] | GameQuestionScalarFieldEnum
    having?: GameQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameQuestionCountAggregateInputType | true
    _avg?: GameQuestionAvgAggregateInputType
    _sum?: GameQuestionSumAggregateInputType
    _min?: GameQuestionMinAggregateInputType
    _max?: GameQuestionMaxAggregateInputType
  }

  export type GameQuestionGroupByOutputType = {
    id: string
    gameId: string
    question: string
    answers: string[]
    correctAnswer: number
    explanation: string
    _count: GameQuestionCountAggregateOutputType | null
    _avg: GameQuestionAvgAggregateOutputType | null
    _sum: GameQuestionSumAggregateOutputType | null
    _min: GameQuestionMinAggregateOutputType | null
    _max: GameQuestionMaxAggregateOutputType | null
  }

  type GetGameQuestionGroupByPayload<T extends GameQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], GameQuestionGroupByOutputType[P]>
        }
      >
    >


  export type GameQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    question?: boolean
    answers?: boolean
    correctAnswer?: boolean
    explanation?: boolean
    references?: boolean | GameQuestion$referencesArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
    _count?: boolean | GameQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameQuestion"]>

  export type GameQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    question?: boolean
    answers?: boolean
    correctAnswer?: boolean
    explanation?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameQuestion"]>

  export type GameQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    question?: boolean
    answers?: boolean
    correctAnswer?: boolean
    explanation?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameQuestion"]>

  export type GameQuestionSelectScalar = {
    id?: boolean
    gameId?: boolean
    question?: boolean
    answers?: boolean
    correctAnswer?: boolean
    explanation?: boolean
  }

  export type GameQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "question" | "answers" | "correctAnswer" | "explanation", ExtArgs["result"]["gameQuestion"]>
  export type GameQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    references?: boolean | GameQuestion$referencesArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
    _count?: boolean | GameQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type GameQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $GameQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameQuestion"
    objects: {
      references: Prisma.$ReferencesPayload<ExtArgs>[]
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      question: string
      answers: string[]
      correctAnswer: number
      explanation: string
    }, ExtArgs["result"]["gameQuestion"]>
    composites: {}
  }

  type GameQuestionGetPayload<S extends boolean | null | undefined | GameQuestionDefaultArgs> = $Result.GetResult<Prisma.$GameQuestionPayload, S>

  type GameQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameQuestionCountAggregateInputType | true
    }

  export interface GameQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameQuestion'], meta: { name: 'GameQuestion' } }
    /**
     * Find zero or one GameQuestion that matches the filter.
     * @param {GameQuestionFindUniqueArgs} args - Arguments to find a GameQuestion
     * @example
     * // Get one GameQuestion
     * const gameQuestion = await prisma.gameQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameQuestionFindUniqueArgs>(args: SelectSubset<T, GameQuestionFindUniqueArgs<ExtArgs>>): Prisma__GameQuestionClient<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameQuestionFindUniqueOrThrowArgs} args - Arguments to find a GameQuestion
     * @example
     * // Get one GameQuestion
     * const gameQuestion = await prisma.gameQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, GameQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameQuestionClient<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameQuestionFindFirstArgs} args - Arguments to find a GameQuestion
     * @example
     * // Get one GameQuestion
     * const gameQuestion = await prisma.gameQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameQuestionFindFirstArgs>(args?: SelectSubset<T, GameQuestionFindFirstArgs<ExtArgs>>): Prisma__GameQuestionClient<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameQuestionFindFirstOrThrowArgs} args - Arguments to find a GameQuestion
     * @example
     * // Get one GameQuestion
     * const gameQuestion = await prisma.gameQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, GameQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameQuestionClient<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameQuestions
     * const gameQuestions = await prisma.gameQuestion.findMany()
     * 
     * // Get first 10 GameQuestions
     * const gameQuestions = await prisma.gameQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameQuestionWithIdOnly = await prisma.gameQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameQuestionFindManyArgs>(args?: SelectSubset<T, GameQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameQuestion.
     * @param {GameQuestionCreateArgs} args - Arguments to create a GameQuestion.
     * @example
     * // Create one GameQuestion
     * const GameQuestion = await prisma.gameQuestion.create({
     *   data: {
     *     // ... data to create a GameQuestion
     *   }
     * })
     * 
     */
    create<T extends GameQuestionCreateArgs>(args: SelectSubset<T, GameQuestionCreateArgs<ExtArgs>>): Prisma__GameQuestionClient<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameQuestions.
     * @param {GameQuestionCreateManyArgs} args - Arguments to create many GameQuestions.
     * @example
     * // Create many GameQuestions
     * const gameQuestion = await prisma.gameQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameQuestionCreateManyArgs>(args?: SelectSubset<T, GameQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameQuestions and returns the data saved in the database.
     * @param {GameQuestionCreateManyAndReturnArgs} args - Arguments to create many GameQuestions.
     * @example
     * // Create many GameQuestions
     * const gameQuestion = await prisma.gameQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameQuestions and only return the `id`
     * const gameQuestionWithIdOnly = await prisma.gameQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, GameQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameQuestion.
     * @param {GameQuestionDeleteArgs} args - Arguments to delete one GameQuestion.
     * @example
     * // Delete one GameQuestion
     * const GameQuestion = await prisma.gameQuestion.delete({
     *   where: {
     *     // ... filter to delete one GameQuestion
     *   }
     * })
     * 
     */
    delete<T extends GameQuestionDeleteArgs>(args: SelectSubset<T, GameQuestionDeleteArgs<ExtArgs>>): Prisma__GameQuestionClient<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameQuestion.
     * @param {GameQuestionUpdateArgs} args - Arguments to update one GameQuestion.
     * @example
     * // Update one GameQuestion
     * const gameQuestion = await prisma.gameQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameQuestionUpdateArgs>(args: SelectSubset<T, GameQuestionUpdateArgs<ExtArgs>>): Prisma__GameQuestionClient<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameQuestions.
     * @param {GameQuestionDeleteManyArgs} args - Arguments to filter GameQuestions to delete.
     * @example
     * // Delete a few GameQuestions
     * const { count } = await prisma.gameQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameQuestionDeleteManyArgs>(args?: SelectSubset<T, GameQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameQuestions
     * const gameQuestion = await prisma.gameQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameQuestionUpdateManyArgs>(args: SelectSubset<T, GameQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameQuestions and returns the data updated in the database.
     * @param {GameQuestionUpdateManyAndReturnArgs} args - Arguments to update many GameQuestions.
     * @example
     * // Update many GameQuestions
     * const gameQuestion = await prisma.gameQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameQuestions and only return the `id`
     * const gameQuestionWithIdOnly = await prisma.gameQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, GameQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameQuestion.
     * @param {GameQuestionUpsertArgs} args - Arguments to update or create a GameQuestion.
     * @example
     * // Update or create a GameQuestion
     * const gameQuestion = await prisma.gameQuestion.upsert({
     *   create: {
     *     // ... data to create a GameQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameQuestion we want to update
     *   }
     * })
     */
    upsert<T extends GameQuestionUpsertArgs>(args: SelectSubset<T, GameQuestionUpsertArgs<ExtArgs>>): Prisma__GameQuestionClient<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameQuestionCountArgs} args - Arguments to filter GameQuestions to count.
     * @example
     * // Count the number of GameQuestions
     * const count = await prisma.gameQuestion.count({
     *   where: {
     *     // ... the filter for the GameQuestions we want to count
     *   }
     * })
    **/
    count<T extends GameQuestionCountArgs>(
      args?: Subset<T, GameQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameQuestionAggregateArgs>(args: Subset<T, GameQuestionAggregateArgs>): Prisma.PrismaPromise<GetGameQuestionAggregateType<T>>

    /**
     * Group by GameQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameQuestionGroupByArgs['orderBy'] }
        : { orderBy?: GameQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameQuestion model
   */
  readonly fields: GameQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    references<T extends GameQuestion$referencesArgs<ExtArgs> = {}>(args?: Subset<T, GameQuestion$referencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameQuestion model
   */
  interface GameQuestionFieldRefs {
    readonly id: FieldRef<"GameQuestion", 'String'>
    readonly gameId: FieldRef<"GameQuestion", 'String'>
    readonly question: FieldRef<"GameQuestion", 'String'>
    readonly answers: FieldRef<"GameQuestion", 'String[]'>
    readonly correctAnswer: FieldRef<"GameQuestion", 'Int'>
    readonly explanation: FieldRef<"GameQuestion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GameQuestion findUnique
   */
  export type GameQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    /**
     * Filter, which GameQuestion to fetch.
     */
    where: GameQuestionWhereUniqueInput
  }

  /**
   * GameQuestion findUniqueOrThrow
   */
  export type GameQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    /**
     * Filter, which GameQuestion to fetch.
     */
    where: GameQuestionWhereUniqueInput
  }

  /**
   * GameQuestion findFirst
   */
  export type GameQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    /**
     * Filter, which GameQuestion to fetch.
     */
    where?: GameQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameQuestions to fetch.
     */
    orderBy?: GameQuestionOrderByWithRelationInput | GameQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameQuestions.
     */
    cursor?: GameQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameQuestions.
     */
    distinct?: GameQuestionScalarFieldEnum | GameQuestionScalarFieldEnum[]
  }

  /**
   * GameQuestion findFirstOrThrow
   */
  export type GameQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    /**
     * Filter, which GameQuestion to fetch.
     */
    where?: GameQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameQuestions to fetch.
     */
    orderBy?: GameQuestionOrderByWithRelationInput | GameQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameQuestions.
     */
    cursor?: GameQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameQuestions.
     */
    distinct?: GameQuestionScalarFieldEnum | GameQuestionScalarFieldEnum[]
  }

  /**
   * GameQuestion findMany
   */
  export type GameQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    /**
     * Filter, which GameQuestions to fetch.
     */
    where?: GameQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameQuestions to fetch.
     */
    orderBy?: GameQuestionOrderByWithRelationInput | GameQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameQuestions.
     */
    cursor?: GameQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameQuestions.
     */
    skip?: number
    distinct?: GameQuestionScalarFieldEnum | GameQuestionScalarFieldEnum[]
  }

  /**
   * GameQuestion create
   */
  export type GameQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a GameQuestion.
     */
    data: XOR<GameQuestionCreateInput, GameQuestionUncheckedCreateInput>
  }

  /**
   * GameQuestion createMany
   */
  export type GameQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameQuestions.
     */
    data: GameQuestionCreateManyInput | GameQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameQuestion createManyAndReturn
   */
  export type GameQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many GameQuestions.
     */
    data: GameQuestionCreateManyInput | GameQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameQuestion update
   */
  export type GameQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a GameQuestion.
     */
    data: XOR<GameQuestionUpdateInput, GameQuestionUncheckedUpdateInput>
    /**
     * Choose, which GameQuestion to update.
     */
    where: GameQuestionWhereUniqueInput
  }

  /**
   * GameQuestion updateMany
   */
  export type GameQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameQuestions.
     */
    data: XOR<GameQuestionUpdateManyMutationInput, GameQuestionUncheckedUpdateManyInput>
    /**
     * Filter which GameQuestions to update
     */
    where?: GameQuestionWhereInput
    /**
     * Limit how many GameQuestions to update.
     */
    limit?: number
  }

  /**
   * GameQuestion updateManyAndReturn
   */
  export type GameQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * The data used to update GameQuestions.
     */
    data: XOR<GameQuestionUpdateManyMutationInput, GameQuestionUncheckedUpdateManyInput>
    /**
     * Filter which GameQuestions to update
     */
    where?: GameQuestionWhereInput
    /**
     * Limit how many GameQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameQuestion upsert
   */
  export type GameQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the GameQuestion to update in case it exists.
     */
    where: GameQuestionWhereUniqueInput
    /**
     * In case the GameQuestion found by the `where` argument doesn't exist, create a new GameQuestion with this data.
     */
    create: XOR<GameQuestionCreateInput, GameQuestionUncheckedCreateInput>
    /**
     * In case the GameQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameQuestionUpdateInput, GameQuestionUncheckedUpdateInput>
  }

  /**
   * GameQuestion delete
   */
  export type GameQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    /**
     * Filter which GameQuestion to delete.
     */
    where: GameQuestionWhereUniqueInput
  }

  /**
   * GameQuestion deleteMany
   */
  export type GameQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameQuestions to delete
     */
    where?: GameQuestionWhereInput
    /**
     * Limit how many GameQuestions to delete.
     */
    limit?: number
  }

  /**
   * GameQuestion.references
   */
  export type GameQuestion$referencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the References
     */
    select?: ReferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the References
     */
    omit?: ReferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferencesInclude<ExtArgs> | null
    where?: ReferencesWhereInput
    orderBy?: ReferencesOrderByWithRelationInput | ReferencesOrderByWithRelationInput[]
    cursor?: ReferencesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferencesScalarFieldEnum | ReferencesScalarFieldEnum[]
  }

  /**
   * GameQuestion without action
   */
  export type GameQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
  }


  /**
   * Model References
   */

  export type AggregateReferences = {
    _count: ReferencesCountAggregateOutputType | null
    _min: ReferencesMinAggregateOutputType | null
    _max: ReferencesMaxAggregateOutputType | null
  }

  export type ReferencesMinAggregateOutputType = {
    id: string | null
    gameQuestionId: string | null
    refrenceName: string | null
    link: string | null
  }

  export type ReferencesMaxAggregateOutputType = {
    id: string | null
    gameQuestionId: string | null
    refrenceName: string | null
    link: string | null
  }

  export type ReferencesCountAggregateOutputType = {
    id: number
    gameQuestionId: number
    refrenceName: number
    link: number
    _all: number
  }


  export type ReferencesMinAggregateInputType = {
    id?: true
    gameQuestionId?: true
    refrenceName?: true
    link?: true
  }

  export type ReferencesMaxAggregateInputType = {
    id?: true
    gameQuestionId?: true
    refrenceName?: true
    link?: true
  }

  export type ReferencesCountAggregateInputType = {
    id?: true
    gameQuestionId?: true
    refrenceName?: true
    link?: true
    _all?: true
  }

  export type ReferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which References to aggregate.
     */
    where?: ReferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of References to fetch.
     */
    orderBy?: ReferencesOrderByWithRelationInput | ReferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` References from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` References.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned References
    **/
    _count?: true | ReferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferencesMaxAggregateInputType
  }

  export type GetReferencesAggregateType<T extends ReferencesAggregateArgs> = {
        [P in keyof T & keyof AggregateReferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferences[P]>
      : GetScalarType<T[P], AggregateReferences[P]>
  }




  export type ReferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferencesWhereInput
    orderBy?: ReferencesOrderByWithAggregationInput | ReferencesOrderByWithAggregationInput[]
    by: ReferencesScalarFieldEnum[] | ReferencesScalarFieldEnum
    having?: ReferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferencesCountAggregateInputType | true
    _min?: ReferencesMinAggregateInputType
    _max?: ReferencesMaxAggregateInputType
  }

  export type ReferencesGroupByOutputType = {
    id: string
    gameQuestionId: string
    refrenceName: string
    link: string
    _count: ReferencesCountAggregateOutputType | null
    _min: ReferencesMinAggregateOutputType | null
    _max: ReferencesMaxAggregateOutputType | null
  }

  type GetReferencesGroupByPayload<T extends ReferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferencesGroupByOutputType[P]>
            : GetScalarType<T[P], ReferencesGroupByOutputType[P]>
        }
      >
    >


  export type ReferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameQuestionId?: boolean
    refrenceName?: boolean
    link?: boolean
    GameQuestion?: boolean | References$GameQuestionArgs<ExtArgs>
  }, ExtArgs["result"]["references"]>

  export type ReferencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameQuestionId?: boolean
    refrenceName?: boolean
    link?: boolean
    GameQuestion?: boolean | References$GameQuestionArgs<ExtArgs>
  }, ExtArgs["result"]["references"]>

  export type ReferencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameQuestionId?: boolean
    refrenceName?: boolean
    link?: boolean
    GameQuestion?: boolean | References$GameQuestionArgs<ExtArgs>
  }, ExtArgs["result"]["references"]>

  export type ReferencesSelectScalar = {
    id?: boolean
    gameQuestionId?: boolean
    refrenceName?: boolean
    link?: boolean
  }

  export type ReferencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameQuestionId" | "refrenceName" | "link", ExtArgs["result"]["references"]>
  export type ReferencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GameQuestion?: boolean | References$GameQuestionArgs<ExtArgs>
  }
  export type ReferencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GameQuestion?: boolean | References$GameQuestionArgs<ExtArgs>
  }
  export type ReferencesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GameQuestion?: boolean | References$GameQuestionArgs<ExtArgs>
  }

  export type $ReferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "References"
    objects: {
      GameQuestion: Prisma.$GameQuestionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameQuestionId: string
      refrenceName: string
      link: string
    }, ExtArgs["result"]["references"]>
    composites: {}
  }

  type ReferencesGetPayload<S extends boolean | null | undefined | ReferencesDefaultArgs> = $Result.GetResult<Prisma.$ReferencesPayload, S>

  type ReferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferencesCountAggregateInputType | true
    }

  export interface ReferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['References'], meta: { name: 'References' } }
    /**
     * Find zero or one References that matches the filter.
     * @param {ReferencesFindUniqueArgs} args - Arguments to find a References
     * @example
     * // Get one References
     * const references = await prisma.references.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferencesFindUniqueArgs>(args: SelectSubset<T, ReferencesFindUniqueArgs<ExtArgs>>): Prisma__ReferencesClient<$Result.GetResult<Prisma.$ReferencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one References that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferencesFindUniqueOrThrowArgs} args - Arguments to find a References
     * @example
     * // Get one References
     * const references = await prisma.references.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferencesClient<$Result.GetResult<Prisma.$ReferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first References that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferencesFindFirstArgs} args - Arguments to find a References
     * @example
     * // Get one References
     * const references = await prisma.references.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferencesFindFirstArgs>(args?: SelectSubset<T, ReferencesFindFirstArgs<ExtArgs>>): Prisma__ReferencesClient<$Result.GetResult<Prisma.$ReferencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first References that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferencesFindFirstOrThrowArgs} args - Arguments to find a References
     * @example
     * // Get one References
     * const references = await prisma.references.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferencesClient<$Result.GetResult<Prisma.$ReferencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more References that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all References
     * const references = await prisma.references.findMany()
     * 
     * // Get first 10 References
     * const references = await prisma.references.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referencesWithIdOnly = await prisma.references.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferencesFindManyArgs>(args?: SelectSubset<T, ReferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a References.
     * @param {ReferencesCreateArgs} args - Arguments to create a References.
     * @example
     * // Create one References
     * const References = await prisma.references.create({
     *   data: {
     *     // ... data to create a References
     *   }
     * })
     * 
     */
    create<T extends ReferencesCreateArgs>(args: SelectSubset<T, ReferencesCreateArgs<ExtArgs>>): Prisma__ReferencesClient<$Result.GetResult<Prisma.$ReferencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many References.
     * @param {ReferencesCreateManyArgs} args - Arguments to create many References.
     * @example
     * // Create many References
     * const references = await prisma.references.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferencesCreateManyArgs>(args?: SelectSubset<T, ReferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many References and returns the data saved in the database.
     * @param {ReferencesCreateManyAndReturnArgs} args - Arguments to create many References.
     * @example
     * // Create many References
     * const references = await prisma.references.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many References and only return the `id`
     * const referencesWithIdOnly = await prisma.references.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferencesCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a References.
     * @param {ReferencesDeleteArgs} args - Arguments to delete one References.
     * @example
     * // Delete one References
     * const References = await prisma.references.delete({
     *   where: {
     *     // ... filter to delete one References
     *   }
     * })
     * 
     */
    delete<T extends ReferencesDeleteArgs>(args: SelectSubset<T, ReferencesDeleteArgs<ExtArgs>>): Prisma__ReferencesClient<$Result.GetResult<Prisma.$ReferencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one References.
     * @param {ReferencesUpdateArgs} args - Arguments to update one References.
     * @example
     * // Update one References
     * const references = await prisma.references.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferencesUpdateArgs>(args: SelectSubset<T, ReferencesUpdateArgs<ExtArgs>>): Prisma__ReferencesClient<$Result.GetResult<Prisma.$ReferencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more References.
     * @param {ReferencesDeleteManyArgs} args - Arguments to filter References to delete.
     * @example
     * // Delete a few References
     * const { count } = await prisma.references.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferencesDeleteManyArgs>(args?: SelectSubset<T, ReferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more References.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many References
     * const references = await prisma.references.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferencesUpdateManyArgs>(args: SelectSubset<T, ReferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more References and returns the data updated in the database.
     * @param {ReferencesUpdateManyAndReturnArgs} args - Arguments to update many References.
     * @example
     * // Update many References
     * const references = await prisma.references.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more References and only return the `id`
     * const referencesWithIdOnly = await prisma.references.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReferencesUpdateManyAndReturnArgs>(args: SelectSubset<T, ReferencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one References.
     * @param {ReferencesUpsertArgs} args - Arguments to update or create a References.
     * @example
     * // Update or create a References
     * const references = await prisma.references.upsert({
     *   create: {
     *     // ... data to create a References
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the References we want to update
     *   }
     * })
     */
    upsert<T extends ReferencesUpsertArgs>(args: SelectSubset<T, ReferencesUpsertArgs<ExtArgs>>): Prisma__ReferencesClient<$Result.GetResult<Prisma.$ReferencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of References.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferencesCountArgs} args - Arguments to filter References to count.
     * @example
     * // Count the number of References
     * const count = await prisma.references.count({
     *   where: {
     *     // ... the filter for the References we want to count
     *   }
     * })
    **/
    count<T extends ReferencesCountArgs>(
      args?: Subset<T, ReferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a References.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReferencesAggregateArgs>(args: Subset<T, ReferencesAggregateArgs>): Prisma.PrismaPromise<GetReferencesAggregateType<T>>

    /**
     * Group by References.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferencesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferencesGroupByArgs['orderBy'] }
        : { orderBy?: ReferencesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the References model
   */
  readonly fields: ReferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for References.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    GameQuestion<T extends References$GameQuestionArgs<ExtArgs> = {}>(args?: Subset<T, References$GameQuestionArgs<ExtArgs>>): Prisma__GameQuestionClient<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the References model
   */
  interface ReferencesFieldRefs {
    readonly id: FieldRef<"References", 'String'>
    readonly gameQuestionId: FieldRef<"References", 'String'>
    readonly refrenceName: FieldRef<"References", 'String'>
    readonly link: FieldRef<"References", 'String'>
  }
    

  // Custom InputTypes
  /**
   * References findUnique
   */
  export type ReferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the References
     */
    select?: ReferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the References
     */
    omit?: ReferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferencesInclude<ExtArgs> | null
    /**
     * Filter, which References to fetch.
     */
    where: ReferencesWhereUniqueInput
  }

  /**
   * References findUniqueOrThrow
   */
  export type ReferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the References
     */
    select?: ReferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the References
     */
    omit?: ReferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferencesInclude<ExtArgs> | null
    /**
     * Filter, which References to fetch.
     */
    where: ReferencesWhereUniqueInput
  }

  /**
   * References findFirst
   */
  export type ReferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the References
     */
    select?: ReferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the References
     */
    omit?: ReferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferencesInclude<ExtArgs> | null
    /**
     * Filter, which References to fetch.
     */
    where?: ReferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of References to fetch.
     */
    orderBy?: ReferencesOrderByWithRelationInput | ReferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for References.
     */
    cursor?: ReferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` References from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` References.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of References.
     */
    distinct?: ReferencesScalarFieldEnum | ReferencesScalarFieldEnum[]
  }

  /**
   * References findFirstOrThrow
   */
  export type ReferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the References
     */
    select?: ReferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the References
     */
    omit?: ReferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferencesInclude<ExtArgs> | null
    /**
     * Filter, which References to fetch.
     */
    where?: ReferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of References to fetch.
     */
    orderBy?: ReferencesOrderByWithRelationInput | ReferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for References.
     */
    cursor?: ReferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` References from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` References.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of References.
     */
    distinct?: ReferencesScalarFieldEnum | ReferencesScalarFieldEnum[]
  }

  /**
   * References findMany
   */
  export type ReferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the References
     */
    select?: ReferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the References
     */
    omit?: ReferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferencesInclude<ExtArgs> | null
    /**
     * Filter, which References to fetch.
     */
    where?: ReferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of References to fetch.
     */
    orderBy?: ReferencesOrderByWithRelationInput | ReferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing References.
     */
    cursor?: ReferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` References from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` References.
     */
    skip?: number
    distinct?: ReferencesScalarFieldEnum | ReferencesScalarFieldEnum[]
  }

  /**
   * References create
   */
  export type ReferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the References
     */
    select?: ReferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the References
     */
    omit?: ReferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferencesInclude<ExtArgs> | null
    /**
     * The data needed to create a References.
     */
    data: XOR<ReferencesCreateInput, ReferencesUncheckedCreateInput>
  }

  /**
   * References createMany
   */
  export type ReferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many References.
     */
    data: ReferencesCreateManyInput | ReferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * References createManyAndReturn
   */
  export type ReferencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the References
     */
    select?: ReferencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the References
     */
    omit?: ReferencesOmit<ExtArgs> | null
    /**
     * The data used to create many References.
     */
    data: ReferencesCreateManyInput | ReferencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * References update
   */
  export type ReferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the References
     */
    select?: ReferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the References
     */
    omit?: ReferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferencesInclude<ExtArgs> | null
    /**
     * The data needed to update a References.
     */
    data: XOR<ReferencesUpdateInput, ReferencesUncheckedUpdateInput>
    /**
     * Choose, which References to update.
     */
    where: ReferencesWhereUniqueInput
  }

  /**
   * References updateMany
   */
  export type ReferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update References.
     */
    data: XOR<ReferencesUpdateManyMutationInput, ReferencesUncheckedUpdateManyInput>
    /**
     * Filter which References to update
     */
    where?: ReferencesWhereInput
    /**
     * Limit how many References to update.
     */
    limit?: number
  }

  /**
   * References updateManyAndReturn
   */
  export type ReferencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the References
     */
    select?: ReferencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the References
     */
    omit?: ReferencesOmit<ExtArgs> | null
    /**
     * The data used to update References.
     */
    data: XOR<ReferencesUpdateManyMutationInput, ReferencesUncheckedUpdateManyInput>
    /**
     * Filter which References to update
     */
    where?: ReferencesWhereInput
    /**
     * Limit how many References to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferencesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * References upsert
   */
  export type ReferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the References
     */
    select?: ReferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the References
     */
    omit?: ReferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferencesInclude<ExtArgs> | null
    /**
     * The filter to search for the References to update in case it exists.
     */
    where: ReferencesWhereUniqueInput
    /**
     * In case the References found by the `where` argument doesn't exist, create a new References with this data.
     */
    create: XOR<ReferencesCreateInput, ReferencesUncheckedCreateInput>
    /**
     * In case the References was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferencesUpdateInput, ReferencesUncheckedUpdateInput>
  }

  /**
   * References delete
   */
  export type ReferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the References
     */
    select?: ReferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the References
     */
    omit?: ReferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferencesInclude<ExtArgs> | null
    /**
     * Filter which References to delete.
     */
    where: ReferencesWhereUniqueInput
  }

  /**
   * References deleteMany
   */
  export type ReferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which References to delete
     */
    where?: ReferencesWhereInput
    /**
     * Limit how many References to delete.
     */
    limit?: number
  }

  /**
   * References.GameQuestion
   */
  export type References$GameQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    where?: GameQuestionWhereInput
  }

  /**
   * References without action
   */
  export type ReferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the References
     */
    select?: ReferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the References
     */
    omit?: ReferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferencesInclude<ExtArgs> | null
  }


  /**
   * Model GameScores
   */

  export type AggregateGameScores = {
    _count: GameScoresCountAggregateOutputType | null
    _avg: GameScoresAvgAggregateOutputType | null
    _sum: GameScoresSumAggregateOutputType | null
    _min: GameScoresMinAggregateOutputType | null
    _max: GameScoresMaxAggregateOutputType | null
  }

  export type GameScoresAvgAggregateOutputType = {
    score: number | null
  }

  export type GameScoresSumAggregateOutputType = {
    score: number | null
  }

  export type GameScoresMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    userName: string | null
    score: number | null
  }

  export type GameScoresMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    userName: string | null
    score: number | null
  }

  export type GameScoresCountAggregateOutputType = {
    id: number
    gameId: number
    userName: number
    score: number
    _all: number
  }


  export type GameScoresAvgAggregateInputType = {
    score?: true
  }

  export type GameScoresSumAggregateInputType = {
    score?: true
  }

  export type GameScoresMinAggregateInputType = {
    id?: true
    gameId?: true
    userName?: true
    score?: true
  }

  export type GameScoresMaxAggregateInputType = {
    id?: true
    gameId?: true
    userName?: true
    score?: true
  }

  export type GameScoresCountAggregateInputType = {
    id?: true
    gameId?: true
    userName?: true
    score?: true
    _all?: true
  }

  export type GameScoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameScores to aggregate.
     */
    where?: GameScoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameScores to fetch.
     */
    orderBy?: GameScoresOrderByWithRelationInput | GameScoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameScoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameScores
    **/
    _count?: true | GameScoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameScoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameScoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameScoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameScoresMaxAggregateInputType
  }

  export type GetGameScoresAggregateType<T extends GameScoresAggregateArgs> = {
        [P in keyof T & keyof AggregateGameScores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameScores[P]>
      : GetScalarType<T[P], AggregateGameScores[P]>
  }




  export type GameScoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameScoresWhereInput
    orderBy?: GameScoresOrderByWithAggregationInput | GameScoresOrderByWithAggregationInput[]
    by: GameScoresScalarFieldEnum[] | GameScoresScalarFieldEnum
    having?: GameScoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameScoresCountAggregateInputType | true
    _avg?: GameScoresAvgAggregateInputType
    _sum?: GameScoresSumAggregateInputType
    _min?: GameScoresMinAggregateInputType
    _max?: GameScoresMaxAggregateInputType
  }

  export type GameScoresGroupByOutputType = {
    id: string
    gameId: string
    userName: string
    score: number
    _count: GameScoresCountAggregateOutputType | null
    _avg: GameScoresAvgAggregateOutputType | null
    _sum: GameScoresSumAggregateOutputType | null
    _min: GameScoresMinAggregateOutputType | null
    _max: GameScoresMaxAggregateOutputType | null
  }

  type GetGameScoresGroupByPayload<T extends GameScoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameScoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameScoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameScoresGroupByOutputType[P]>
            : GetScalarType<T[P], GameScoresGroupByOutputType[P]>
        }
      >
    >


  export type GameScoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userName?: boolean
    score?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameScores"]>

  export type GameScoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userName?: boolean
    score?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameScores"]>

  export type GameScoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userName?: boolean
    score?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameScores"]>

  export type GameScoresSelectScalar = {
    id?: boolean
    gameId?: boolean
    userName?: boolean
    score?: boolean
  }

  export type GameScoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "userName" | "score", ExtArgs["result"]["gameScores"]>
  export type GameScoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type GameScoresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type GameScoresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $GameScoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameScores"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      userName: string
      score: number
    }, ExtArgs["result"]["gameScores"]>
    composites: {}
  }

  type GameScoresGetPayload<S extends boolean | null | undefined | GameScoresDefaultArgs> = $Result.GetResult<Prisma.$GameScoresPayload, S>

  type GameScoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameScoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameScoresCountAggregateInputType | true
    }

  export interface GameScoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameScores'], meta: { name: 'GameScores' } }
    /**
     * Find zero or one GameScores that matches the filter.
     * @param {GameScoresFindUniqueArgs} args - Arguments to find a GameScores
     * @example
     * // Get one GameScores
     * const gameScores = await prisma.gameScores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameScoresFindUniqueArgs>(args: SelectSubset<T, GameScoresFindUniqueArgs<ExtArgs>>): Prisma__GameScoresClient<$Result.GetResult<Prisma.$GameScoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameScores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameScoresFindUniqueOrThrowArgs} args - Arguments to find a GameScores
     * @example
     * // Get one GameScores
     * const gameScores = await prisma.gameScores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameScoresFindUniqueOrThrowArgs>(args: SelectSubset<T, GameScoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameScoresClient<$Result.GetResult<Prisma.$GameScoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoresFindFirstArgs} args - Arguments to find a GameScores
     * @example
     * // Get one GameScores
     * const gameScores = await prisma.gameScores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameScoresFindFirstArgs>(args?: SelectSubset<T, GameScoresFindFirstArgs<ExtArgs>>): Prisma__GameScoresClient<$Result.GetResult<Prisma.$GameScoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameScores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoresFindFirstOrThrowArgs} args - Arguments to find a GameScores
     * @example
     * // Get one GameScores
     * const gameScores = await prisma.gameScores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameScoresFindFirstOrThrowArgs>(args?: SelectSubset<T, GameScoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameScoresClient<$Result.GetResult<Prisma.$GameScoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameScores
     * const gameScores = await prisma.gameScores.findMany()
     * 
     * // Get first 10 GameScores
     * const gameScores = await prisma.gameScores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameScoresWithIdOnly = await prisma.gameScores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameScoresFindManyArgs>(args?: SelectSubset<T, GameScoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameScoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameScores.
     * @param {GameScoresCreateArgs} args - Arguments to create a GameScores.
     * @example
     * // Create one GameScores
     * const GameScores = await prisma.gameScores.create({
     *   data: {
     *     // ... data to create a GameScores
     *   }
     * })
     * 
     */
    create<T extends GameScoresCreateArgs>(args: SelectSubset<T, GameScoresCreateArgs<ExtArgs>>): Prisma__GameScoresClient<$Result.GetResult<Prisma.$GameScoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameScores.
     * @param {GameScoresCreateManyArgs} args - Arguments to create many GameScores.
     * @example
     * // Create many GameScores
     * const gameScores = await prisma.gameScores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameScoresCreateManyArgs>(args?: SelectSubset<T, GameScoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameScores and returns the data saved in the database.
     * @param {GameScoresCreateManyAndReturnArgs} args - Arguments to create many GameScores.
     * @example
     * // Create many GameScores
     * const gameScores = await prisma.gameScores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameScores and only return the `id`
     * const gameScoresWithIdOnly = await prisma.gameScores.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameScoresCreateManyAndReturnArgs>(args?: SelectSubset<T, GameScoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameScoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameScores.
     * @param {GameScoresDeleteArgs} args - Arguments to delete one GameScores.
     * @example
     * // Delete one GameScores
     * const GameScores = await prisma.gameScores.delete({
     *   where: {
     *     // ... filter to delete one GameScores
     *   }
     * })
     * 
     */
    delete<T extends GameScoresDeleteArgs>(args: SelectSubset<T, GameScoresDeleteArgs<ExtArgs>>): Prisma__GameScoresClient<$Result.GetResult<Prisma.$GameScoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameScores.
     * @param {GameScoresUpdateArgs} args - Arguments to update one GameScores.
     * @example
     * // Update one GameScores
     * const gameScores = await prisma.gameScores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameScoresUpdateArgs>(args: SelectSubset<T, GameScoresUpdateArgs<ExtArgs>>): Prisma__GameScoresClient<$Result.GetResult<Prisma.$GameScoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameScores.
     * @param {GameScoresDeleteManyArgs} args - Arguments to filter GameScores to delete.
     * @example
     * // Delete a few GameScores
     * const { count } = await prisma.gameScores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameScoresDeleteManyArgs>(args?: SelectSubset<T, GameScoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameScores
     * const gameScores = await prisma.gameScores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameScoresUpdateManyArgs>(args: SelectSubset<T, GameScoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameScores and returns the data updated in the database.
     * @param {GameScoresUpdateManyAndReturnArgs} args - Arguments to update many GameScores.
     * @example
     * // Update many GameScores
     * const gameScores = await prisma.gameScores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameScores and only return the `id`
     * const gameScoresWithIdOnly = await prisma.gameScores.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameScoresUpdateManyAndReturnArgs>(args: SelectSubset<T, GameScoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameScoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameScores.
     * @param {GameScoresUpsertArgs} args - Arguments to update or create a GameScores.
     * @example
     * // Update or create a GameScores
     * const gameScores = await prisma.gameScores.upsert({
     *   create: {
     *     // ... data to create a GameScores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameScores we want to update
     *   }
     * })
     */
    upsert<T extends GameScoresUpsertArgs>(args: SelectSubset<T, GameScoresUpsertArgs<ExtArgs>>): Prisma__GameScoresClient<$Result.GetResult<Prisma.$GameScoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoresCountArgs} args - Arguments to filter GameScores to count.
     * @example
     * // Count the number of GameScores
     * const count = await prisma.gameScores.count({
     *   where: {
     *     // ... the filter for the GameScores we want to count
     *   }
     * })
    **/
    count<T extends GameScoresCountArgs>(
      args?: Subset<T, GameScoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameScoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameScoresAggregateArgs>(args: Subset<T, GameScoresAggregateArgs>): Prisma.PrismaPromise<GetGameScoresAggregateType<T>>

    /**
     * Group by GameScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameScoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameScoresGroupByArgs['orderBy'] }
        : { orderBy?: GameScoresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameScoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameScoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameScores model
   */
  readonly fields: GameScoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameScores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameScoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameScores model
   */
  interface GameScoresFieldRefs {
    readonly id: FieldRef<"GameScores", 'String'>
    readonly gameId: FieldRef<"GameScores", 'String'>
    readonly userName: FieldRef<"GameScores", 'String'>
    readonly score: FieldRef<"GameScores", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GameScores findUnique
   */
  export type GameScoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScores
     */
    select?: GameScoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScores
     */
    omit?: GameScoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoresInclude<ExtArgs> | null
    /**
     * Filter, which GameScores to fetch.
     */
    where: GameScoresWhereUniqueInput
  }

  /**
   * GameScores findUniqueOrThrow
   */
  export type GameScoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScores
     */
    select?: GameScoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScores
     */
    omit?: GameScoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoresInclude<ExtArgs> | null
    /**
     * Filter, which GameScores to fetch.
     */
    where: GameScoresWhereUniqueInput
  }

  /**
   * GameScores findFirst
   */
  export type GameScoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScores
     */
    select?: GameScoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScores
     */
    omit?: GameScoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoresInclude<ExtArgs> | null
    /**
     * Filter, which GameScores to fetch.
     */
    where?: GameScoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameScores to fetch.
     */
    orderBy?: GameScoresOrderByWithRelationInput | GameScoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameScores.
     */
    cursor?: GameScoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameScores.
     */
    distinct?: GameScoresScalarFieldEnum | GameScoresScalarFieldEnum[]
  }

  /**
   * GameScores findFirstOrThrow
   */
  export type GameScoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScores
     */
    select?: GameScoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScores
     */
    omit?: GameScoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoresInclude<ExtArgs> | null
    /**
     * Filter, which GameScores to fetch.
     */
    where?: GameScoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameScores to fetch.
     */
    orderBy?: GameScoresOrderByWithRelationInput | GameScoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameScores.
     */
    cursor?: GameScoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameScores.
     */
    distinct?: GameScoresScalarFieldEnum | GameScoresScalarFieldEnum[]
  }

  /**
   * GameScores findMany
   */
  export type GameScoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScores
     */
    select?: GameScoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScores
     */
    omit?: GameScoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoresInclude<ExtArgs> | null
    /**
     * Filter, which GameScores to fetch.
     */
    where?: GameScoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameScores to fetch.
     */
    orderBy?: GameScoresOrderByWithRelationInput | GameScoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameScores.
     */
    cursor?: GameScoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameScores.
     */
    skip?: number
    distinct?: GameScoresScalarFieldEnum | GameScoresScalarFieldEnum[]
  }

  /**
   * GameScores create
   */
  export type GameScoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScores
     */
    select?: GameScoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScores
     */
    omit?: GameScoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoresInclude<ExtArgs> | null
    /**
     * The data needed to create a GameScores.
     */
    data: XOR<GameScoresCreateInput, GameScoresUncheckedCreateInput>
  }

  /**
   * GameScores createMany
   */
  export type GameScoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameScores.
     */
    data: GameScoresCreateManyInput | GameScoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameScores createManyAndReturn
   */
  export type GameScoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScores
     */
    select?: GameScoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameScores
     */
    omit?: GameScoresOmit<ExtArgs> | null
    /**
     * The data used to create many GameScores.
     */
    data: GameScoresCreateManyInput | GameScoresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameScores update
   */
  export type GameScoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScores
     */
    select?: GameScoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScores
     */
    omit?: GameScoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoresInclude<ExtArgs> | null
    /**
     * The data needed to update a GameScores.
     */
    data: XOR<GameScoresUpdateInput, GameScoresUncheckedUpdateInput>
    /**
     * Choose, which GameScores to update.
     */
    where: GameScoresWhereUniqueInput
  }

  /**
   * GameScores updateMany
   */
  export type GameScoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameScores.
     */
    data: XOR<GameScoresUpdateManyMutationInput, GameScoresUncheckedUpdateManyInput>
    /**
     * Filter which GameScores to update
     */
    where?: GameScoresWhereInput
    /**
     * Limit how many GameScores to update.
     */
    limit?: number
  }

  /**
   * GameScores updateManyAndReturn
   */
  export type GameScoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScores
     */
    select?: GameScoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameScores
     */
    omit?: GameScoresOmit<ExtArgs> | null
    /**
     * The data used to update GameScores.
     */
    data: XOR<GameScoresUpdateManyMutationInput, GameScoresUncheckedUpdateManyInput>
    /**
     * Filter which GameScores to update
     */
    where?: GameScoresWhereInput
    /**
     * Limit how many GameScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameScores upsert
   */
  export type GameScoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScores
     */
    select?: GameScoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScores
     */
    omit?: GameScoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoresInclude<ExtArgs> | null
    /**
     * The filter to search for the GameScores to update in case it exists.
     */
    where: GameScoresWhereUniqueInput
    /**
     * In case the GameScores found by the `where` argument doesn't exist, create a new GameScores with this data.
     */
    create: XOR<GameScoresCreateInput, GameScoresUncheckedCreateInput>
    /**
     * In case the GameScores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameScoresUpdateInput, GameScoresUncheckedUpdateInput>
  }

  /**
   * GameScores delete
   */
  export type GameScoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScores
     */
    select?: GameScoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScores
     */
    omit?: GameScoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoresInclude<ExtArgs> | null
    /**
     * Filter which GameScores to delete.
     */
    where: GameScoresWhereUniqueInput
  }

  /**
   * GameScores deleteMany
   */
  export type GameScoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameScores to delete
     */
    where?: GameScoresWhereInput
    /**
     * Limit how many GameScores to delete.
     */
    limit?: number
  }

  /**
   * GameScores without action
   */
  export type GameScoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScores
     */
    select?: GameScoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScores
     */
    omit?: GameScoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoresInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GameScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    topic: 'topic',
    score: 'score',
    difficulty: 'difficulty',
    createdAt: 'createdAt',
    image: 'image'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const GameQuestionScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    question: 'question',
    answers: 'answers',
    correctAnswer: 'correctAnswer',
    explanation: 'explanation'
  };

  export type GameQuestionScalarFieldEnum = (typeof GameQuestionScalarFieldEnum)[keyof typeof GameQuestionScalarFieldEnum]


  export const ReferencesScalarFieldEnum: {
    id: 'id',
    gameQuestionId: 'gameQuestionId',
    refrenceName: 'refrenceName',
    link: 'link'
  };

  export type ReferencesScalarFieldEnum = (typeof ReferencesScalarFieldEnum)[keyof typeof ReferencesScalarFieldEnum]


  export const GameScoresScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    userName: 'userName',
    score: 'score'
  };

  export type GameScoresScalarFieldEnum = (typeof GameScoresScalarFieldEnum)[keyof typeof GameScoresScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    userName?: StringFilter<"Game"> | string
    topic?: StringFilter<"Game"> | string
    score?: IntFilter<"Game"> | number
    difficulty?: StringFilter<"Game"> | string
    createdAt?: DateTimeFilter<"Game"> | Date | string
    image?: StringFilter<"Game"> | string
    questions?: GameQuestionListRelationFilter
    GameScores?: GameScoresListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    topic?: SortOrder
    score?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    image?: SortOrder
    questions?: GameQuestionOrderByRelationAggregateInput
    GameScores?: GameScoresOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    userName?: StringFilter<"Game"> | string
    topic?: StringFilter<"Game"> | string
    score?: IntFilter<"Game"> | number
    difficulty?: StringFilter<"Game"> | string
    createdAt?: DateTimeFilter<"Game"> | Date | string
    image?: StringFilter<"Game"> | string
    questions?: GameQuestionListRelationFilter
    GameScores?: GameScoresListRelationFilter
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    topic?: SortOrder
    score?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    image?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    userName?: StringWithAggregatesFilter<"Game"> | string
    topic?: StringWithAggregatesFilter<"Game"> | string
    score?: IntWithAggregatesFilter<"Game"> | number
    difficulty?: StringWithAggregatesFilter<"Game"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    image?: StringWithAggregatesFilter<"Game"> | string
  }

  export type GameQuestionWhereInput = {
    AND?: GameQuestionWhereInput | GameQuestionWhereInput[]
    OR?: GameQuestionWhereInput[]
    NOT?: GameQuestionWhereInput | GameQuestionWhereInput[]
    id?: StringFilter<"GameQuestion"> | string
    gameId?: StringFilter<"GameQuestion"> | string
    question?: StringFilter<"GameQuestion"> | string
    answers?: StringNullableListFilter<"GameQuestion">
    correctAnswer?: IntFilter<"GameQuestion"> | number
    explanation?: StringFilter<"GameQuestion"> | string
    references?: ReferencesListRelationFilter
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type GameQuestionOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    question?: SortOrder
    answers?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
    references?: ReferencesOrderByRelationAggregateInput
    game?: GameOrderByWithRelationInput
  }

  export type GameQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameQuestionWhereInput | GameQuestionWhereInput[]
    OR?: GameQuestionWhereInput[]
    NOT?: GameQuestionWhereInput | GameQuestionWhereInput[]
    gameId?: StringFilter<"GameQuestion"> | string
    question?: StringFilter<"GameQuestion"> | string
    answers?: StringNullableListFilter<"GameQuestion">
    correctAnswer?: IntFilter<"GameQuestion"> | number
    explanation?: StringFilter<"GameQuestion"> | string
    references?: ReferencesListRelationFilter
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id">

  export type GameQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    question?: SortOrder
    answers?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
    _count?: GameQuestionCountOrderByAggregateInput
    _avg?: GameQuestionAvgOrderByAggregateInput
    _max?: GameQuestionMaxOrderByAggregateInput
    _min?: GameQuestionMinOrderByAggregateInput
    _sum?: GameQuestionSumOrderByAggregateInput
  }

  export type GameQuestionScalarWhereWithAggregatesInput = {
    AND?: GameQuestionScalarWhereWithAggregatesInput | GameQuestionScalarWhereWithAggregatesInput[]
    OR?: GameQuestionScalarWhereWithAggregatesInput[]
    NOT?: GameQuestionScalarWhereWithAggregatesInput | GameQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameQuestion"> | string
    gameId?: StringWithAggregatesFilter<"GameQuestion"> | string
    question?: StringWithAggregatesFilter<"GameQuestion"> | string
    answers?: StringNullableListFilter<"GameQuestion">
    correctAnswer?: IntWithAggregatesFilter<"GameQuestion"> | number
    explanation?: StringWithAggregatesFilter<"GameQuestion"> | string
  }

  export type ReferencesWhereInput = {
    AND?: ReferencesWhereInput | ReferencesWhereInput[]
    OR?: ReferencesWhereInput[]
    NOT?: ReferencesWhereInput | ReferencesWhereInput[]
    id?: StringFilter<"References"> | string
    gameQuestionId?: StringFilter<"References"> | string
    refrenceName?: StringFilter<"References"> | string
    link?: StringFilter<"References"> | string
    GameQuestion?: XOR<GameQuestionNullableScalarRelationFilter, GameQuestionWhereInput> | null
  }

  export type ReferencesOrderByWithRelationInput = {
    id?: SortOrder
    gameQuestionId?: SortOrder
    refrenceName?: SortOrder
    link?: SortOrder
    GameQuestion?: GameQuestionOrderByWithRelationInput
  }

  export type ReferencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReferencesWhereInput | ReferencesWhereInput[]
    OR?: ReferencesWhereInput[]
    NOT?: ReferencesWhereInput | ReferencesWhereInput[]
    gameQuestionId?: StringFilter<"References"> | string
    refrenceName?: StringFilter<"References"> | string
    link?: StringFilter<"References"> | string
    GameQuestion?: XOR<GameQuestionNullableScalarRelationFilter, GameQuestionWhereInput> | null
  }, "id">

  export type ReferencesOrderByWithAggregationInput = {
    id?: SortOrder
    gameQuestionId?: SortOrder
    refrenceName?: SortOrder
    link?: SortOrder
    _count?: ReferencesCountOrderByAggregateInput
    _max?: ReferencesMaxOrderByAggregateInput
    _min?: ReferencesMinOrderByAggregateInput
  }

  export type ReferencesScalarWhereWithAggregatesInput = {
    AND?: ReferencesScalarWhereWithAggregatesInput | ReferencesScalarWhereWithAggregatesInput[]
    OR?: ReferencesScalarWhereWithAggregatesInput[]
    NOT?: ReferencesScalarWhereWithAggregatesInput | ReferencesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"References"> | string
    gameQuestionId?: StringWithAggregatesFilter<"References"> | string
    refrenceName?: StringWithAggregatesFilter<"References"> | string
    link?: StringWithAggregatesFilter<"References"> | string
  }

  export type GameScoresWhereInput = {
    AND?: GameScoresWhereInput | GameScoresWhereInput[]
    OR?: GameScoresWhereInput[]
    NOT?: GameScoresWhereInput | GameScoresWhereInput[]
    id?: StringFilter<"GameScores"> | string
    gameId?: StringFilter<"GameScores"> | string
    userName?: StringFilter<"GameScores"> | string
    score?: IntFilter<"GameScores"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type GameScoresOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    userName?: SortOrder
    score?: SortOrder
    game?: GameOrderByWithRelationInput
  }

  export type GameScoresWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameScoresWhereInput | GameScoresWhereInput[]
    OR?: GameScoresWhereInput[]
    NOT?: GameScoresWhereInput | GameScoresWhereInput[]
    gameId?: StringFilter<"GameScores"> | string
    userName?: StringFilter<"GameScores"> | string
    score?: IntFilter<"GameScores"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id">

  export type GameScoresOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    userName?: SortOrder
    score?: SortOrder
    _count?: GameScoresCountOrderByAggregateInput
    _avg?: GameScoresAvgOrderByAggregateInput
    _max?: GameScoresMaxOrderByAggregateInput
    _min?: GameScoresMinOrderByAggregateInput
    _sum?: GameScoresSumOrderByAggregateInput
  }

  export type GameScoresScalarWhereWithAggregatesInput = {
    AND?: GameScoresScalarWhereWithAggregatesInput | GameScoresScalarWhereWithAggregatesInput[]
    OR?: GameScoresScalarWhereWithAggregatesInput[]
    NOT?: GameScoresScalarWhereWithAggregatesInput | GameScoresScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameScores"> | string
    gameId?: StringWithAggregatesFilter<"GameScores"> | string
    userName?: StringWithAggregatesFilter<"GameScores"> | string
    score?: IntWithAggregatesFilter<"GameScores"> | number
  }

  export type GameCreateInput = {
    id?: string
    userName: string
    topic: string
    score: number
    difficulty: string
    createdAt?: Date | string
    image: string
    questions?: GameQuestionCreateNestedManyWithoutGameInput
    GameScores?: GameScoresCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    userName: string
    topic: string
    score: number
    difficulty: string
    createdAt?: Date | string
    image: string
    questions?: GameQuestionUncheckedCreateNestedManyWithoutGameInput
    GameScores?: GameScoresUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: StringFieldUpdateOperationsInput | string
    questions?: GameQuestionUpdateManyWithoutGameNestedInput
    GameScores?: GameScoresUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: StringFieldUpdateOperationsInput | string
    questions?: GameQuestionUncheckedUpdateManyWithoutGameNestedInput
    GameScores?: GameScoresUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: string
    userName: string
    topic: string
    score: number
    difficulty: string
    createdAt?: Date | string
    image: string
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type GameQuestionCreateInput = {
    id?: string
    question: string
    answers?: GameQuestionCreateanswersInput | string[]
    correctAnswer: number
    explanation: string
    references?: ReferencesCreateNestedManyWithoutGameQuestionInput
    game: GameCreateNestedOneWithoutQuestionsInput
  }

  export type GameQuestionUncheckedCreateInput = {
    id?: string
    gameId: string
    question: string
    answers?: GameQuestionCreateanswersInput | string[]
    correctAnswer: number
    explanation: string
    references?: ReferencesUncheckedCreateNestedManyWithoutGameQuestionInput
  }

  export type GameQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answers?: GameQuestionUpdateanswersInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
    references?: ReferencesUpdateManyWithoutGameQuestionNestedInput
    game?: GameUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type GameQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answers?: GameQuestionUpdateanswersInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
    references?: ReferencesUncheckedUpdateManyWithoutGameQuestionNestedInput
  }

  export type GameQuestionCreateManyInput = {
    id?: string
    gameId: string
    question: string
    answers?: GameQuestionCreateanswersInput | string[]
    correctAnswer: number
    explanation: string
  }

  export type GameQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answers?: GameQuestionUpdateanswersInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
  }

  export type GameQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answers?: GameQuestionUpdateanswersInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
  }

  export type ReferencesCreateInput = {
    id?: string
    refrenceName: string
    link: string
    GameQuestion?: GameQuestionCreateNestedOneWithoutReferencesInput
  }

  export type ReferencesUncheckedCreateInput = {
    id?: string
    gameQuestionId: string
    refrenceName: string
    link: string
  }

  export type ReferencesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refrenceName?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    GameQuestion?: GameQuestionUpdateOneWithoutReferencesNestedInput
  }

  export type ReferencesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameQuestionId?: StringFieldUpdateOperationsInput | string
    refrenceName?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type ReferencesCreateManyInput = {
    id?: string
    gameQuestionId: string
    refrenceName: string
    link: string
  }

  export type ReferencesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    refrenceName?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type ReferencesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameQuestionId?: StringFieldUpdateOperationsInput | string
    refrenceName?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type GameScoresCreateInput = {
    id?: string
    userName: string
    score: number
    game: GameCreateNestedOneWithoutGameScoresInput
  }

  export type GameScoresUncheckedCreateInput = {
    id?: string
    gameId: string
    userName: string
    score: number
  }

  export type GameScoresUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    game?: GameUpdateOneRequiredWithoutGameScoresNestedInput
  }

  export type GameScoresUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type GameScoresCreateManyInput = {
    id?: string
    gameId: string
    userName: string
    score: number
  }

  export type GameScoresUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type GameScoresUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GameQuestionListRelationFilter = {
    every?: GameQuestionWhereInput
    some?: GameQuestionWhereInput
    none?: GameQuestionWhereInput
  }

  export type GameScoresListRelationFilter = {
    every?: GameScoresWhereInput
    some?: GameScoresWhereInput
    none?: GameScoresWhereInput
  }

  export type GameQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameScoresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    topic?: SortOrder
    score?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    image?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    topic?: SortOrder
    score?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    image?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    topic?: SortOrder
    score?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    image?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ReferencesListRelationFilter = {
    every?: ReferencesWhereInput
    some?: ReferencesWhereInput
    none?: ReferencesWhereInput
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type ReferencesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    question?: SortOrder
    answers?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
  }

  export type GameQuestionAvgOrderByAggregateInput = {
    correctAnswer?: SortOrder
  }

  export type GameQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    question?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
  }

  export type GameQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    question?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
  }

  export type GameQuestionSumOrderByAggregateInput = {
    correctAnswer?: SortOrder
  }

  export type GameQuestionNullableScalarRelationFilter = {
    is?: GameQuestionWhereInput | null
    isNot?: GameQuestionWhereInput | null
  }

  export type ReferencesCountOrderByAggregateInput = {
    id?: SortOrder
    gameQuestionId?: SortOrder
    refrenceName?: SortOrder
    link?: SortOrder
  }

  export type ReferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    gameQuestionId?: SortOrder
    refrenceName?: SortOrder
    link?: SortOrder
  }

  export type ReferencesMinOrderByAggregateInput = {
    id?: SortOrder
    gameQuestionId?: SortOrder
    refrenceName?: SortOrder
    link?: SortOrder
  }

  export type GameScoresCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userName?: SortOrder
    score?: SortOrder
  }

  export type GameScoresAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type GameScoresMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userName?: SortOrder
    score?: SortOrder
  }

  export type GameScoresMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userName?: SortOrder
    score?: SortOrder
  }

  export type GameScoresSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type GameQuestionCreateNestedManyWithoutGameInput = {
    create?: XOR<GameQuestionCreateWithoutGameInput, GameQuestionUncheckedCreateWithoutGameInput> | GameQuestionCreateWithoutGameInput[] | GameQuestionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameQuestionCreateOrConnectWithoutGameInput | GameQuestionCreateOrConnectWithoutGameInput[]
    createMany?: GameQuestionCreateManyGameInputEnvelope
    connect?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
  }

  export type GameScoresCreateNestedManyWithoutGameInput = {
    create?: XOR<GameScoresCreateWithoutGameInput, GameScoresUncheckedCreateWithoutGameInput> | GameScoresCreateWithoutGameInput[] | GameScoresUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameScoresCreateOrConnectWithoutGameInput | GameScoresCreateOrConnectWithoutGameInput[]
    createMany?: GameScoresCreateManyGameInputEnvelope
    connect?: GameScoresWhereUniqueInput | GameScoresWhereUniqueInput[]
  }

  export type GameQuestionUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GameQuestionCreateWithoutGameInput, GameQuestionUncheckedCreateWithoutGameInput> | GameQuestionCreateWithoutGameInput[] | GameQuestionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameQuestionCreateOrConnectWithoutGameInput | GameQuestionCreateOrConnectWithoutGameInput[]
    createMany?: GameQuestionCreateManyGameInputEnvelope
    connect?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
  }

  export type GameScoresUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GameScoresCreateWithoutGameInput, GameScoresUncheckedCreateWithoutGameInput> | GameScoresCreateWithoutGameInput[] | GameScoresUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameScoresCreateOrConnectWithoutGameInput | GameScoresCreateOrConnectWithoutGameInput[]
    createMany?: GameScoresCreateManyGameInputEnvelope
    connect?: GameScoresWhereUniqueInput | GameScoresWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GameQuestionUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameQuestionCreateWithoutGameInput, GameQuestionUncheckedCreateWithoutGameInput> | GameQuestionCreateWithoutGameInput[] | GameQuestionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameQuestionCreateOrConnectWithoutGameInput | GameQuestionCreateOrConnectWithoutGameInput[]
    upsert?: GameQuestionUpsertWithWhereUniqueWithoutGameInput | GameQuestionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameQuestionCreateManyGameInputEnvelope
    set?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    disconnect?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    delete?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    connect?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    update?: GameQuestionUpdateWithWhereUniqueWithoutGameInput | GameQuestionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameQuestionUpdateManyWithWhereWithoutGameInput | GameQuestionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameQuestionScalarWhereInput | GameQuestionScalarWhereInput[]
  }

  export type GameScoresUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameScoresCreateWithoutGameInput, GameScoresUncheckedCreateWithoutGameInput> | GameScoresCreateWithoutGameInput[] | GameScoresUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameScoresCreateOrConnectWithoutGameInput | GameScoresCreateOrConnectWithoutGameInput[]
    upsert?: GameScoresUpsertWithWhereUniqueWithoutGameInput | GameScoresUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameScoresCreateManyGameInputEnvelope
    set?: GameScoresWhereUniqueInput | GameScoresWhereUniqueInput[]
    disconnect?: GameScoresWhereUniqueInput | GameScoresWhereUniqueInput[]
    delete?: GameScoresWhereUniqueInput | GameScoresWhereUniqueInput[]
    connect?: GameScoresWhereUniqueInput | GameScoresWhereUniqueInput[]
    update?: GameScoresUpdateWithWhereUniqueWithoutGameInput | GameScoresUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameScoresUpdateManyWithWhereWithoutGameInput | GameScoresUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameScoresScalarWhereInput | GameScoresScalarWhereInput[]
  }

  export type GameQuestionUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameQuestionCreateWithoutGameInput, GameQuestionUncheckedCreateWithoutGameInput> | GameQuestionCreateWithoutGameInput[] | GameQuestionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameQuestionCreateOrConnectWithoutGameInput | GameQuestionCreateOrConnectWithoutGameInput[]
    upsert?: GameQuestionUpsertWithWhereUniqueWithoutGameInput | GameQuestionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameQuestionCreateManyGameInputEnvelope
    set?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    disconnect?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    delete?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    connect?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    update?: GameQuestionUpdateWithWhereUniqueWithoutGameInput | GameQuestionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameQuestionUpdateManyWithWhereWithoutGameInput | GameQuestionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameQuestionScalarWhereInput | GameQuestionScalarWhereInput[]
  }

  export type GameScoresUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameScoresCreateWithoutGameInput, GameScoresUncheckedCreateWithoutGameInput> | GameScoresCreateWithoutGameInput[] | GameScoresUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameScoresCreateOrConnectWithoutGameInput | GameScoresCreateOrConnectWithoutGameInput[]
    upsert?: GameScoresUpsertWithWhereUniqueWithoutGameInput | GameScoresUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameScoresCreateManyGameInputEnvelope
    set?: GameScoresWhereUniqueInput | GameScoresWhereUniqueInput[]
    disconnect?: GameScoresWhereUniqueInput | GameScoresWhereUniqueInput[]
    delete?: GameScoresWhereUniqueInput | GameScoresWhereUniqueInput[]
    connect?: GameScoresWhereUniqueInput | GameScoresWhereUniqueInput[]
    update?: GameScoresUpdateWithWhereUniqueWithoutGameInput | GameScoresUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameScoresUpdateManyWithWhereWithoutGameInput | GameScoresUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameScoresScalarWhereInput | GameScoresScalarWhereInput[]
  }

  export type GameQuestionCreateanswersInput = {
    set: string[]
  }

  export type ReferencesCreateNestedManyWithoutGameQuestionInput = {
    create?: XOR<ReferencesCreateWithoutGameQuestionInput, ReferencesUncheckedCreateWithoutGameQuestionInput> | ReferencesCreateWithoutGameQuestionInput[] | ReferencesUncheckedCreateWithoutGameQuestionInput[]
    connectOrCreate?: ReferencesCreateOrConnectWithoutGameQuestionInput | ReferencesCreateOrConnectWithoutGameQuestionInput[]
    createMany?: ReferencesCreateManyGameQuestionInputEnvelope
    connect?: ReferencesWhereUniqueInput | ReferencesWhereUniqueInput[]
  }

  export type GameCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<GameCreateWithoutQuestionsInput, GameUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: GameCreateOrConnectWithoutQuestionsInput
    connect?: GameWhereUniqueInput
  }

  export type ReferencesUncheckedCreateNestedManyWithoutGameQuestionInput = {
    create?: XOR<ReferencesCreateWithoutGameQuestionInput, ReferencesUncheckedCreateWithoutGameQuestionInput> | ReferencesCreateWithoutGameQuestionInput[] | ReferencesUncheckedCreateWithoutGameQuestionInput[]
    connectOrCreate?: ReferencesCreateOrConnectWithoutGameQuestionInput | ReferencesCreateOrConnectWithoutGameQuestionInput[]
    createMany?: ReferencesCreateManyGameQuestionInputEnvelope
    connect?: ReferencesWhereUniqueInput | ReferencesWhereUniqueInput[]
  }

  export type GameQuestionUpdateanswersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ReferencesUpdateManyWithoutGameQuestionNestedInput = {
    create?: XOR<ReferencesCreateWithoutGameQuestionInput, ReferencesUncheckedCreateWithoutGameQuestionInput> | ReferencesCreateWithoutGameQuestionInput[] | ReferencesUncheckedCreateWithoutGameQuestionInput[]
    connectOrCreate?: ReferencesCreateOrConnectWithoutGameQuestionInput | ReferencesCreateOrConnectWithoutGameQuestionInput[]
    upsert?: ReferencesUpsertWithWhereUniqueWithoutGameQuestionInput | ReferencesUpsertWithWhereUniqueWithoutGameQuestionInput[]
    createMany?: ReferencesCreateManyGameQuestionInputEnvelope
    set?: ReferencesWhereUniqueInput | ReferencesWhereUniqueInput[]
    disconnect?: ReferencesWhereUniqueInput | ReferencesWhereUniqueInput[]
    delete?: ReferencesWhereUniqueInput | ReferencesWhereUniqueInput[]
    connect?: ReferencesWhereUniqueInput | ReferencesWhereUniqueInput[]
    update?: ReferencesUpdateWithWhereUniqueWithoutGameQuestionInput | ReferencesUpdateWithWhereUniqueWithoutGameQuestionInput[]
    updateMany?: ReferencesUpdateManyWithWhereWithoutGameQuestionInput | ReferencesUpdateManyWithWhereWithoutGameQuestionInput[]
    deleteMany?: ReferencesScalarWhereInput | ReferencesScalarWhereInput[]
  }

  export type GameUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<GameCreateWithoutQuestionsInput, GameUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: GameCreateOrConnectWithoutQuestionsInput
    upsert?: GameUpsertWithoutQuestionsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutQuestionsInput, GameUpdateWithoutQuestionsInput>, GameUncheckedUpdateWithoutQuestionsInput>
  }

  export type ReferencesUncheckedUpdateManyWithoutGameQuestionNestedInput = {
    create?: XOR<ReferencesCreateWithoutGameQuestionInput, ReferencesUncheckedCreateWithoutGameQuestionInput> | ReferencesCreateWithoutGameQuestionInput[] | ReferencesUncheckedCreateWithoutGameQuestionInput[]
    connectOrCreate?: ReferencesCreateOrConnectWithoutGameQuestionInput | ReferencesCreateOrConnectWithoutGameQuestionInput[]
    upsert?: ReferencesUpsertWithWhereUniqueWithoutGameQuestionInput | ReferencesUpsertWithWhereUniqueWithoutGameQuestionInput[]
    createMany?: ReferencesCreateManyGameQuestionInputEnvelope
    set?: ReferencesWhereUniqueInput | ReferencesWhereUniqueInput[]
    disconnect?: ReferencesWhereUniqueInput | ReferencesWhereUniqueInput[]
    delete?: ReferencesWhereUniqueInput | ReferencesWhereUniqueInput[]
    connect?: ReferencesWhereUniqueInput | ReferencesWhereUniqueInput[]
    update?: ReferencesUpdateWithWhereUniqueWithoutGameQuestionInput | ReferencesUpdateWithWhereUniqueWithoutGameQuestionInput[]
    updateMany?: ReferencesUpdateManyWithWhereWithoutGameQuestionInput | ReferencesUpdateManyWithWhereWithoutGameQuestionInput[]
    deleteMany?: ReferencesScalarWhereInput | ReferencesScalarWhereInput[]
  }

  export type GameQuestionCreateNestedOneWithoutReferencesInput = {
    create?: XOR<GameQuestionCreateWithoutReferencesInput, GameQuestionUncheckedCreateWithoutReferencesInput>
    connectOrCreate?: GameQuestionCreateOrConnectWithoutReferencesInput
    connect?: GameQuestionWhereUniqueInput
  }

  export type GameQuestionUpdateOneWithoutReferencesNestedInput = {
    create?: XOR<GameQuestionCreateWithoutReferencesInput, GameQuestionUncheckedCreateWithoutReferencesInput>
    connectOrCreate?: GameQuestionCreateOrConnectWithoutReferencesInput
    upsert?: GameQuestionUpsertWithoutReferencesInput
    disconnect?: GameQuestionWhereInput | boolean
    delete?: GameQuestionWhereInput | boolean
    connect?: GameQuestionWhereUniqueInput
    update?: XOR<XOR<GameQuestionUpdateToOneWithWhereWithoutReferencesInput, GameQuestionUpdateWithoutReferencesInput>, GameQuestionUncheckedUpdateWithoutReferencesInput>
  }

  export type GameCreateNestedOneWithoutGameScoresInput = {
    create?: XOR<GameCreateWithoutGameScoresInput, GameUncheckedCreateWithoutGameScoresInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameScoresInput
    connect?: GameWhereUniqueInput
  }

  export type GameUpdateOneRequiredWithoutGameScoresNestedInput = {
    create?: XOR<GameCreateWithoutGameScoresInput, GameUncheckedCreateWithoutGameScoresInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameScoresInput
    upsert?: GameUpsertWithoutGameScoresInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutGameScoresInput, GameUpdateWithoutGameScoresInput>, GameUncheckedUpdateWithoutGameScoresInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GameQuestionCreateWithoutGameInput = {
    id?: string
    question: string
    answers?: GameQuestionCreateanswersInput | string[]
    correctAnswer: number
    explanation: string
    references?: ReferencesCreateNestedManyWithoutGameQuestionInput
  }

  export type GameQuestionUncheckedCreateWithoutGameInput = {
    id?: string
    question: string
    answers?: GameQuestionCreateanswersInput | string[]
    correctAnswer: number
    explanation: string
    references?: ReferencesUncheckedCreateNestedManyWithoutGameQuestionInput
  }

  export type GameQuestionCreateOrConnectWithoutGameInput = {
    where: GameQuestionWhereUniqueInput
    create: XOR<GameQuestionCreateWithoutGameInput, GameQuestionUncheckedCreateWithoutGameInput>
  }

  export type GameQuestionCreateManyGameInputEnvelope = {
    data: GameQuestionCreateManyGameInput | GameQuestionCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type GameScoresCreateWithoutGameInput = {
    id?: string
    userName: string
    score: number
  }

  export type GameScoresUncheckedCreateWithoutGameInput = {
    id?: string
    userName: string
    score: number
  }

  export type GameScoresCreateOrConnectWithoutGameInput = {
    where: GameScoresWhereUniqueInput
    create: XOR<GameScoresCreateWithoutGameInput, GameScoresUncheckedCreateWithoutGameInput>
  }

  export type GameScoresCreateManyGameInputEnvelope = {
    data: GameScoresCreateManyGameInput | GameScoresCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type GameQuestionUpsertWithWhereUniqueWithoutGameInput = {
    where: GameQuestionWhereUniqueInput
    update: XOR<GameQuestionUpdateWithoutGameInput, GameQuestionUncheckedUpdateWithoutGameInput>
    create: XOR<GameQuestionCreateWithoutGameInput, GameQuestionUncheckedCreateWithoutGameInput>
  }

  export type GameQuestionUpdateWithWhereUniqueWithoutGameInput = {
    where: GameQuestionWhereUniqueInput
    data: XOR<GameQuestionUpdateWithoutGameInput, GameQuestionUncheckedUpdateWithoutGameInput>
  }

  export type GameQuestionUpdateManyWithWhereWithoutGameInput = {
    where: GameQuestionScalarWhereInput
    data: XOR<GameQuestionUpdateManyMutationInput, GameQuestionUncheckedUpdateManyWithoutGameInput>
  }

  export type GameQuestionScalarWhereInput = {
    AND?: GameQuestionScalarWhereInput | GameQuestionScalarWhereInput[]
    OR?: GameQuestionScalarWhereInput[]
    NOT?: GameQuestionScalarWhereInput | GameQuestionScalarWhereInput[]
    id?: StringFilter<"GameQuestion"> | string
    gameId?: StringFilter<"GameQuestion"> | string
    question?: StringFilter<"GameQuestion"> | string
    answers?: StringNullableListFilter<"GameQuestion">
    correctAnswer?: IntFilter<"GameQuestion"> | number
    explanation?: StringFilter<"GameQuestion"> | string
  }

  export type GameScoresUpsertWithWhereUniqueWithoutGameInput = {
    where: GameScoresWhereUniqueInput
    update: XOR<GameScoresUpdateWithoutGameInput, GameScoresUncheckedUpdateWithoutGameInput>
    create: XOR<GameScoresCreateWithoutGameInput, GameScoresUncheckedCreateWithoutGameInput>
  }

  export type GameScoresUpdateWithWhereUniqueWithoutGameInput = {
    where: GameScoresWhereUniqueInput
    data: XOR<GameScoresUpdateWithoutGameInput, GameScoresUncheckedUpdateWithoutGameInput>
  }

  export type GameScoresUpdateManyWithWhereWithoutGameInput = {
    where: GameScoresScalarWhereInput
    data: XOR<GameScoresUpdateManyMutationInput, GameScoresUncheckedUpdateManyWithoutGameInput>
  }

  export type GameScoresScalarWhereInput = {
    AND?: GameScoresScalarWhereInput | GameScoresScalarWhereInput[]
    OR?: GameScoresScalarWhereInput[]
    NOT?: GameScoresScalarWhereInput | GameScoresScalarWhereInput[]
    id?: StringFilter<"GameScores"> | string
    gameId?: StringFilter<"GameScores"> | string
    userName?: StringFilter<"GameScores"> | string
    score?: IntFilter<"GameScores"> | number
  }

  export type ReferencesCreateWithoutGameQuestionInput = {
    id?: string
    refrenceName: string
    link: string
  }

  export type ReferencesUncheckedCreateWithoutGameQuestionInput = {
    id?: string
    refrenceName: string
    link: string
  }

  export type ReferencesCreateOrConnectWithoutGameQuestionInput = {
    where: ReferencesWhereUniqueInput
    create: XOR<ReferencesCreateWithoutGameQuestionInput, ReferencesUncheckedCreateWithoutGameQuestionInput>
  }

  export type ReferencesCreateManyGameQuestionInputEnvelope = {
    data: ReferencesCreateManyGameQuestionInput | ReferencesCreateManyGameQuestionInput[]
    skipDuplicates?: boolean
  }

  export type GameCreateWithoutQuestionsInput = {
    id?: string
    userName: string
    topic: string
    score: number
    difficulty: string
    createdAt?: Date | string
    image: string
    GameScores?: GameScoresCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutQuestionsInput = {
    id?: string
    userName: string
    topic: string
    score: number
    difficulty: string
    createdAt?: Date | string
    image: string
    GameScores?: GameScoresUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutQuestionsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutQuestionsInput, GameUncheckedCreateWithoutQuestionsInput>
  }

  export type ReferencesUpsertWithWhereUniqueWithoutGameQuestionInput = {
    where: ReferencesWhereUniqueInput
    update: XOR<ReferencesUpdateWithoutGameQuestionInput, ReferencesUncheckedUpdateWithoutGameQuestionInput>
    create: XOR<ReferencesCreateWithoutGameQuestionInput, ReferencesUncheckedCreateWithoutGameQuestionInput>
  }

  export type ReferencesUpdateWithWhereUniqueWithoutGameQuestionInput = {
    where: ReferencesWhereUniqueInput
    data: XOR<ReferencesUpdateWithoutGameQuestionInput, ReferencesUncheckedUpdateWithoutGameQuestionInput>
  }

  export type ReferencesUpdateManyWithWhereWithoutGameQuestionInput = {
    where: ReferencesScalarWhereInput
    data: XOR<ReferencesUpdateManyMutationInput, ReferencesUncheckedUpdateManyWithoutGameQuestionInput>
  }

  export type ReferencesScalarWhereInput = {
    AND?: ReferencesScalarWhereInput | ReferencesScalarWhereInput[]
    OR?: ReferencesScalarWhereInput[]
    NOT?: ReferencesScalarWhereInput | ReferencesScalarWhereInput[]
    id?: StringFilter<"References"> | string
    gameQuestionId?: StringFilter<"References"> | string
    refrenceName?: StringFilter<"References"> | string
    link?: StringFilter<"References"> | string
  }

  export type GameUpsertWithoutQuestionsInput = {
    update: XOR<GameUpdateWithoutQuestionsInput, GameUncheckedUpdateWithoutQuestionsInput>
    create: XOR<GameCreateWithoutQuestionsInput, GameUncheckedCreateWithoutQuestionsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutQuestionsInput, GameUncheckedUpdateWithoutQuestionsInput>
  }

  export type GameUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: StringFieldUpdateOperationsInput | string
    GameScores?: GameScoresUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: StringFieldUpdateOperationsInput | string
    GameScores?: GameScoresUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameQuestionCreateWithoutReferencesInput = {
    id?: string
    question: string
    answers?: GameQuestionCreateanswersInput | string[]
    correctAnswer: number
    explanation: string
    game: GameCreateNestedOneWithoutQuestionsInput
  }

  export type GameQuestionUncheckedCreateWithoutReferencesInput = {
    id?: string
    gameId: string
    question: string
    answers?: GameQuestionCreateanswersInput | string[]
    correctAnswer: number
    explanation: string
  }

  export type GameQuestionCreateOrConnectWithoutReferencesInput = {
    where: GameQuestionWhereUniqueInput
    create: XOR<GameQuestionCreateWithoutReferencesInput, GameQuestionUncheckedCreateWithoutReferencesInput>
  }

  export type GameQuestionUpsertWithoutReferencesInput = {
    update: XOR<GameQuestionUpdateWithoutReferencesInput, GameQuestionUncheckedUpdateWithoutReferencesInput>
    create: XOR<GameQuestionCreateWithoutReferencesInput, GameQuestionUncheckedCreateWithoutReferencesInput>
    where?: GameQuestionWhereInput
  }

  export type GameQuestionUpdateToOneWithWhereWithoutReferencesInput = {
    where?: GameQuestionWhereInput
    data: XOR<GameQuestionUpdateWithoutReferencesInput, GameQuestionUncheckedUpdateWithoutReferencesInput>
  }

  export type GameQuestionUpdateWithoutReferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answers?: GameQuestionUpdateanswersInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
    game?: GameUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type GameQuestionUncheckedUpdateWithoutReferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answers?: GameQuestionUpdateanswersInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
  }

  export type GameCreateWithoutGameScoresInput = {
    id?: string
    userName: string
    topic: string
    score: number
    difficulty: string
    createdAt?: Date | string
    image: string
    questions?: GameQuestionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutGameScoresInput = {
    id?: string
    userName: string
    topic: string
    score: number
    difficulty: string
    createdAt?: Date | string
    image: string
    questions?: GameQuestionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutGameScoresInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutGameScoresInput, GameUncheckedCreateWithoutGameScoresInput>
  }

  export type GameUpsertWithoutGameScoresInput = {
    update: XOR<GameUpdateWithoutGameScoresInput, GameUncheckedUpdateWithoutGameScoresInput>
    create: XOR<GameCreateWithoutGameScoresInput, GameUncheckedCreateWithoutGameScoresInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutGameScoresInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutGameScoresInput, GameUncheckedUpdateWithoutGameScoresInput>
  }

  export type GameUpdateWithoutGameScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: StringFieldUpdateOperationsInput | string
    questions?: GameQuestionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutGameScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: StringFieldUpdateOperationsInput | string
    questions?: GameQuestionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameQuestionCreateManyGameInput = {
    id?: string
    question: string
    answers?: GameQuestionCreateanswersInput | string[]
    correctAnswer: number
    explanation: string
  }

  export type GameScoresCreateManyGameInput = {
    id?: string
    userName: string
    score: number
  }

  export type GameQuestionUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answers?: GameQuestionUpdateanswersInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
    references?: ReferencesUpdateManyWithoutGameQuestionNestedInput
  }

  export type GameQuestionUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answers?: GameQuestionUpdateanswersInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
    references?: ReferencesUncheckedUpdateManyWithoutGameQuestionNestedInput
  }

  export type GameQuestionUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answers?: GameQuestionUpdateanswersInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
  }

  export type GameScoresUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type GameScoresUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type GameScoresUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type ReferencesCreateManyGameQuestionInput = {
    id?: string
    refrenceName: string
    link: string
  }

  export type ReferencesUpdateWithoutGameQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    refrenceName?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type ReferencesUncheckedUpdateWithoutGameQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    refrenceName?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type ReferencesUncheckedUpdateManyWithoutGameQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    refrenceName?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}