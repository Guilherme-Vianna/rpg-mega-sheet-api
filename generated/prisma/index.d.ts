
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model password_reset_tokens
 * 
 */
export type password_reset_tokens = $Result.DefaultSelection<Prisma.$password_reset_tokensPayload>
/**
 * Model sheets
 * 
 */
export type sheets = $Result.DefaultSelection<Prisma.$sheetsPayload>
/**
 * Model sections
 * 
 */
export type sections = $Result.DefaultSelection<Prisma.$sectionsPayload>
/**
 * Model fields
 * 
 */
export type fields = $Result.DefaultSelection<Prisma.$fieldsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.password_reset_tokens`: Exposes CRUD operations for the **password_reset_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Password_reset_tokens
    * const password_reset_tokens = await prisma.password_reset_tokens.findMany()
    * ```
    */
  get password_reset_tokens(): Prisma.password_reset_tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sheets`: Exposes CRUD operations for the **sheets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sheets
    * const sheets = await prisma.sheets.findMany()
    * ```
    */
  get sheets(): Prisma.sheetsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sections`: Exposes CRUD operations for the **sections** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.sections.findMany()
    * ```
    */
  get sections(): Prisma.sectionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fields`: Exposes CRUD operations for the **fields** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fields
    * const fields = await prisma.fields.findMany()
    * ```
    */
  get fields(): Prisma.fieldsDelegate<ExtArgs, ClientOptions>;
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
    users: 'users',
    password_reset_tokens: 'password_reset_tokens',
    sheets: 'sheets',
    sections: 'sections',
    fields: 'fields'
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
      modelProps: "users" | "password_reset_tokens" | "sheets" | "sections" | "fields"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      password_reset_tokens: {
        payload: Prisma.$password_reset_tokensPayload<ExtArgs>
        fields: Prisma.password_reset_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.password_reset_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.password_reset_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          findFirst: {
            args: Prisma.password_reset_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.password_reset_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          findMany: {
            args: Prisma.password_reset_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>[]
          }
          create: {
            args: Prisma.password_reset_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          createMany: {
            args: Prisma.password_reset_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.password_reset_tokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>[]
          }
          delete: {
            args: Prisma.password_reset_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          update: {
            args: Prisma.password_reset_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          deleteMany: {
            args: Prisma.password_reset_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.password_reset_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.password_reset_tokensUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>[]
          }
          upsert: {
            args: Prisma.password_reset_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          aggregate: {
            args: Prisma.Password_reset_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassword_reset_tokens>
          }
          groupBy: {
            args: Prisma.password_reset_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Password_reset_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.password_reset_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Password_reset_tokensCountAggregateOutputType> | number
          }
        }
      }
      sheets: {
        payload: Prisma.$sheetsPayload<ExtArgs>
        fields: Prisma.sheetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sheetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sheetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>
          }
          findFirst: {
            args: Prisma.sheetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sheetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>
          }
          findMany: {
            args: Prisma.sheetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>[]
          }
          create: {
            args: Prisma.sheetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>
          }
          createMany: {
            args: Prisma.sheetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sheetsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>[]
          }
          delete: {
            args: Prisma.sheetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>
          }
          update: {
            args: Prisma.sheetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>
          }
          deleteMany: {
            args: Prisma.sheetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sheetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sheetsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>[]
          }
          upsert: {
            args: Prisma.sheetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>
          }
          aggregate: {
            args: Prisma.SheetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSheets>
          }
          groupBy: {
            args: Prisma.sheetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SheetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sheetsCountArgs<ExtArgs>
            result: $Utils.Optional<SheetsCountAggregateOutputType> | number
          }
        }
      }
      sections: {
        payload: Prisma.$sectionsPayload<ExtArgs>
        fields: Prisma.sectionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sectionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sectionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload>
          }
          findFirst: {
            args: Prisma.sectionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sectionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload>
          }
          findMany: {
            args: Prisma.sectionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload>[]
          }
          create: {
            args: Prisma.sectionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload>
          }
          createMany: {
            args: Prisma.sectionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sectionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload>[]
          }
          delete: {
            args: Prisma.sectionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload>
          }
          update: {
            args: Prisma.sectionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload>
          }
          deleteMany: {
            args: Prisma.sectionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sectionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sectionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload>[]
          }
          upsert: {
            args: Prisma.sectionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload>
          }
          aggregate: {
            args: Prisma.SectionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSections>
          }
          groupBy: {
            args: Prisma.sectionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sectionsCountArgs<ExtArgs>
            result: $Utils.Optional<SectionsCountAggregateOutputType> | number
          }
        }
      }
      fields: {
        payload: Prisma.$fieldsPayload<ExtArgs>
        fields: Prisma.fieldsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fieldsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fieldsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload>
          }
          findFirst: {
            args: Prisma.fieldsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fieldsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload>
          }
          findMany: {
            args: Prisma.fieldsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload>[]
          }
          create: {
            args: Prisma.fieldsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload>
          }
          createMany: {
            args: Prisma.fieldsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.fieldsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload>[]
          }
          delete: {
            args: Prisma.fieldsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload>
          }
          update: {
            args: Prisma.fieldsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload>
          }
          deleteMany: {
            args: Prisma.fieldsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fieldsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.fieldsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload>[]
          }
          upsert: {
            args: Prisma.fieldsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload>
          }
          aggregate: {
            args: Prisma.FieldsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFields>
          }
          groupBy: {
            args: Prisma.fieldsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FieldsGroupByOutputType>[]
          }
          count: {
            args: Prisma.fieldsCountArgs<ExtArgs>
            result: $Utils.Optional<FieldsCountAggregateOutputType> | number
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
    users?: usersOmit
    password_reset_tokens?: password_reset_tokensOmit
    sheets?: sheetsOmit
    sections?: sectionsOmit
    fields?: fieldsOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    PasswordResetToken: number
    sheets: number
    sections: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PasswordResetToken?: boolean | UsersCountOutputTypeCountPasswordResetTokenArgs
    sheets?: boolean | UsersCountOutputTypeCountSheetsArgs
    sections?: boolean | UsersCountOutputTypeCountSectionsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPasswordResetTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: password_reset_tokensWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sheetsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sectionsWhereInput
  }


  /**
   * Count Type SheetsCountOutputType
   */

  export type SheetsCountOutputType = {
    Fields: number
    sections: number
  }

  export type SheetsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Fields?: boolean | SheetsCountOutputTypeCountFieldsArgs
    sections?: boolean | SheetsCountOutputTypeCountSectionsArgs
  }

  // Custom InputTypes
  /**
   * SheetsCountOutputType without action
   */
  export type SheetsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetsCountOutputType
     */
    select?: SheetsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SheetsCountOutputType without action
   */
  export type SheetsCountOutputTypeCountFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fieldsWhereInput
  }

  /**
   * SheetsCountOutputType without action
   */
  export type SheetsCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sectionsWhereInput
  }


  /**
   * Count Type SectionsCountOutputType
   */

  export type SectionsCountOutputType = {
    Fields: number
  }

  export type SectionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Fields?: boolean | SectionsCountOutputTypeCountFieldsArgs
  }

  // Custom InputTypes
  /**
   * SectionsCountOutputType without action
   */
  export type SectionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionsCountOutputType
     */
    select?: SectionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionsCountOutputType without action
   */
  export type SectionsCountOutputTypeCountFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fieldsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    recoveryTokens: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    recoveryTokens?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    recoveryTokens: string[]
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    recoveryTokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    PasswordResetToken?: boolean | users$PasswordResetTokenArgs<ExtArgs>
    sheets?: boolean | users$sheetsArgs<ExtArgs>
    sections?: boolean | users$sectionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    recoveryTokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    recoveryTokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    recoveryTokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "recoveryTokens" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PasswordResetToken?: boolean | users$PasswordResetTokenArgs<ExtArgs>
    sheets?: boolean | users$sheetsArgs<ExtArgs>
    sections?: boolean | users$sectionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      PasswordResetToken: Prisma.$password_reset_tokensPayload<ExtArgs>[]
      sheets: Prisma.$sheetsPayload<ExtArgs>[]
      sections: Prisma.$sectionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      recoveryTokens: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PasswordResetToken<T extends users$PasswordResetTokenArgs<ExtArgs> = {}>(args?: Subset<T, users$PasswordResetTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sheets<T extends users$sheetsArgs<ExtArgs> = {}>(args?: Subset<T, users$sheetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sections<T extends users$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, users$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly recoveryTokens: FieldRef<"users", 'String[]'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.PasswordResetToken
   */
  export type users$PasswordResetTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    where?: password_reset_tokensWhereInput
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    cursor?: password_reset_tokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Password_reset_tokensScalarFieldEnum | Password_reset_tokensScalarFieldEnum[]
  }

  /**
   * users.sheets
   */
  export type users$sheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
    where?: sheetsWhereInput
    orderBy?: sheetsOrderByWithRelationInput | sheetsOrderByWithRelationInput[]
    cursor?: sheetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SheetsScalarFieldEnum | SheetsScalarFieldEnum[]
  }

  /**
   * users.sections
   */
  export type users$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    where?: sectionsWhereInput
    orderBy?: sectionsOrderByWithRelationInput | sectionsOrderByWithRelationInput[]
    cursor?: sectionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionsScalarFieldEnum | SectionsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model password_reset_tokens
   */

  export type AggregatePassword_reset_tokens = {
    _count: Password_reset_tokensCountAggregateOutputType | null
    _avg: Password_reset_tokensAvgAggregateOutputType | null
    _sum: Password_reset_tokensSumAggregateOutputType | null
    _min: Password_reset_tokensMinAggregateOutputType | null
    _max: Password_reset_tokensMaxAggregateOutputType | null
  }

  export type Password_reset_tokensAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Password_reset_tokensSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Password_reset_tokensMinAggregateOutputType = {
    id: number | null
    token: string | null
    userId: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type Password_reset_tokensMaxAggregateOutputType = {
    id: number | null
    token: string | null
    userId: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type Password_reset_tokensCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type Password_reset_tokensAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Password_reset_tokensSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Password_reset_tokensMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type Password_reset_tokensMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type Password_reset_tokensCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type Password_reset_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_reset_tokens to aggregate.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned password_reset_tokens
    **/
    _count?: true | Password_reset_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Password_reset_tokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Password_reset_tokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Password_reset_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Password_reset_tokensMaxAggregateInputType
  }

  export type GetPassword_reset_tokensAggregateType<T extends Password_reset_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregatePassword_reset_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassword_reset_tokens[P]>
      : GetScalarType<T[P], AggregatePassword_reset_tokens[P]>
  }




  export type password_reset_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: password_reset_tokensWhereInput
    orderBy?: password_reset_tokensOrderByWithAggregationInput | password_reset_tokensOrderByWithAggregationInput[]
    by: Password_reset_tokensScalarFieldEnum[] | Password_reset_tokensScalarFieldEnum
    having?: password_reset_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Password_reset_tokensCountAggregateInputType | true
    _avg?: Password_reset_tokensAvgAggregateInputType
    _sum?: Password_reset_tokensSumAggregateInputType
    _min?: Password_reset_tokensMinAggregateInputType
    _max?: Password_reset_tokensMaxAggregateInputType
  }

  export type Password_reset_tokensGroupByOutputType = {
    id: number
    token: string
    userId: number
    expiresAt: Date
    createdAt: Date
    _count: Password_reset_tokensCountAggregateOutputType | null
    _avg: Password_reset_tokensAvgAggregateOutputType | null
    _sum: Password_reset_tokensSumAggregateOutputType | null
    _min: Password_reset_tokensMinAggregateOutputType | null
    _max: Password_reset_tokensMaxAggregateOutputType | null
  }

  type GetPassword_reset_tokensGroupByPayload<T extends password_reset_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Password_reset_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Password_reset_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Password_reset_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Password_reset_tokensGroupByOutputType[P]>
        }
      >
    >


  export type password_reset_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password_reset_tokens"]>

  export type password_reset_tokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password_reset_tokens"]>

  export type password_reset_tokensSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password_reset_tokens"]>

  export type password_reset_tokensSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type password_reset_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "expiresAt" | "createdAt", ExtArgs["result"]["password_reset_tokens"]>
  export type password_reset_tokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type password_reset_tokensIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type password_reset_tokensIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $password_reset_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "password_reset_tokens"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      userId: number
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["password_reset_tokens"]>
    composites: {}
  }

  type password_reset_tokensGetPayload<S extends boolean | null | undefined | password_reset_tokensDefaultArgs> = $Result.GetResult<Prisma.$password_reset_tokensPayload, S>

  type password_reset_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<password_reset_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Password_reset_tokensCountAggregateInputType | true
    }

  export interface password_reset_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['password_reset_tokens'], meta: { name: 'password_reset_tokens' } }
    /**
     * Find zero or one Password_reset_tokens that matches the filter.
     * @param {password_reset_tokensFindUniqueArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends password_reset_tokensFindUniqueArgs>(args: SelectSubset<T, password_reset_tokensFindUniqueArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Password_reset_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {password_reset_tokensFindUniqueOrThrowArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends password_reset_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, password_reset_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password_reset_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensFindFirstArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends password_reset_tokensFindFirstArgs>(args?: SelectSubset<T, password_reset_tokensFindFirstArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password_reset_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensFindFirstOrThrowArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends password_reset_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, password_reset_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Password_reset_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findMany()
     * 
     * // Get first 10 Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const password_reset_tokensWithIdOnly = await prisma.password_reset_tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends password_reset_tokensFindManyArgs>(args?: SelectSubset<T, password_reset_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Password_reset_tokens.
     * @param {password_reset_tokensCreateArgs} args - Arguments to create a Password_reset_tokens.
     * @example
     * // Create one Password_reset_tokens
     * const Password_reset_tokens = await prisma.password_reset_tokens.create({
     *   data: {
     *     // ... data to create a Password_reset_tokens
     *   }
     * })
     * 
     */
    create<T extends password_reset_tokensCreateArgs>(args: SelectSubset<T, password_reset_tokensCreateArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Password_reset_tokens.
     * @param {password_reset_tokensCreateManyArgs} args - Arguments to create many Password_reset_tokens.
     * @example
     * // Create many Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends password_reset_tokensCreateManyArgs>(args?: SelectSubset<T, password_reset_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Password_reset_tokens and returns the data saved in the database.
     * @param {password_reset_tokensCreateManyAndReturnArgs} args - Arguments to create many Password_reset_tokens.
     * @example
     * // Create many Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Password_reset_tokens and only return the `id`
     * const password_reset_tokensWithIdOnly = await prisma.password_reset_tokens.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends password_reset_tokensCreateManyAndReturnArgs>(args?: SelectSubset<T, password_reset_tokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Password_reset_tokens.
     * @param {password_reset_tokensDeleteArgs} args - Arguments to delete one Password_reset_tokens.
     * @example
     * // Delete one Password_reset_tokens
     * const Password_reset_tokens = await prisma.password_reset_tokens.delete({
     *   where: {
     *     // ... filter to delete one Password_reset_tokens
     *   }
     * })
     * 
     */
    delete<T extends password_reset_tokensDeleteArgs>(args: SelectSubset<T, password_reset_tokensDeleteArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Password_reset_tokens.
     * @param {password_reset_tokensUpdateArgs} args - Arguments to update one Password_reset_tokens.
     * @example
     * // Update one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends password_reset_tokensUpdateArgs>(args: SelectSubset<T, password_reset_tokensUpdateArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Password_reset_tokens.
     * @param {password_reset_tokensDeleteManyArgs} args - Arguments to filter Password_reset_tokens to delete.
     * @example
     * // Delete a few Password_reset_tokens
     * const { count } = await prisma.password_reset_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends password_reset_tokensDeleteManyArgs>(args?: SelectSubset<T, password_reset_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends password_reset_tokensUpdateManyArgs>(args: SelectSubset<T, password_reset_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Password_reset_tokens and returns the data updated in the database.
     * @param {password_reset_tokensUpdateManyAndReturnArgs} args - Arguments to update many Password_reset_tokens.
     * @example
     * // Update many Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Password_reset_tokens and only return the `id`
     * const password_reset_tokensWithIdOnly = await prisma.password_reset_tokens.updateManyAndReturn({
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
    updateManyAndReturn<T extends password_reset_tokensUpdateManyAndReturnArgs>(args: SelectSubset<T, password_reset_tokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Password_reset_tokens.
     * @param {password_reset_tokensUpsertArgs} args - Arguments to update or create a Password_reset_tokens.
     * @example
     * // Update or create a Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.upsert({
     *   create: {
     *     // ... data to create a Password_reset_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Password_reset_tokens we want to update
     *   }
     * })
     */
    upsert<T extends password_reset_tokensUpsertArgs>(args: SelectSubset<T, password_reset_tokensUpsertArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensCountArgs} args - Arguments to filter Password_reset_tokens to count.
     * @example
     * // Count the number of Password_reset_tokens
     * const count = await prisma.password_reset_tokens.count({
     *   where: {
     *     // ... the filter for the Password_reset_tokens we want to count
     *   }
     * })
    **/
    count<T extends password_reset_tokensCountArgs>(
      args?: Subset<T, password_reset_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Password_reset_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Password_reset_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Password_reset_tokensAggregateArgs>(args: Subset<T, Password_reset_tokensAggregateArgs>): Prisma.PrismaPromise<GetPassword_reset_tokensAggregateType<T>>

    /**
     * Group by Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensGroupByArgs} args - Group by arguments.
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
      T extends password_reset_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: password_reset_tokensGroupByArgs['orderBy'] }
        : { orderBy?: password_reset_tokensGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, password_reset_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassword_reset_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the password_reset_tokens model
   */
  readonly fields: password_reset_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for password_reset_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__password_reset_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the password_reset_tokens model
   */
  interface password_reset_tokensFieldRefs {
    readonly id: FieldRef<"password_reset_tokens", 'Int'>
    readonly token: FieldRef<"password_reset_tokens", 'String'>
    readonly userId: FieldRef<"password_reset_tokens", 'Int'>
    readonly expiresAt: FieldRef<"password_reset_tokens", 'DateTime'>
    readonly createdAt: FieldRef<"password_reset_tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * password_reset_tokens findUnique
   */
  export type password_reset_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens findUniqueOrThrow
   */
  export type password_reset_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens findFirst
   */
  export type password_reset_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_reset_tokens.
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_reset_tokens.
     */
    distinct?: Password_reset_tokensScalarFieldEnum | Password_reset_tokensScalarFieldEnum[]
  }

  /**
   * password_reset_tokens findFirstOrThrow
   */
  export type password_reset_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_reset_tokens.
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_reset_tokens.
     */
    distinct?: Password_reset_tokensScalarFieldEnum | Password_reset_tokensScalarFieldEnum[]
  }

  /**
   * password_reset_tokens findMany
   */
  export type password_reset_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing password_reset_tokens.
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    distinct?: Password_reset_tokensScalarFieldEnum | Password_reset_tokensScalarFieldEnum[]
  }

  /**
   * password_reset_tokens create
   */
  export type password_reset_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * The data needed to create a password_reset_tokens.
     */
    data: XOR<password_reset_tokensCreateInput, password_reset_tokensUncheckedCreateInput>
  }

  /**
   * password_reset_tokens createMany
   */
  export type password_reset_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many password_reset_tokens.
     */
    data: password_reset_tokensCreateManyInput | password_reset_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * password_reset_tokens createManyAndReturn
   */
  export type password_reset_tokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * The data used to create many password_reset_tokens.
     */
    data: password_reset_tokensCreateManyInput | password_reset_tokensCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * password_reset_tokens update
   */
  export type password_reset_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * The data needed to update a password_reset_tokens.
     */
    data: XOR<password_reset_tokensUpdateInput, password_reset_tokensUncheckedUpdateInput>
    /**
     * Choose, which password_reset_tokens to update.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens updateMany
   */
  export type password_reset_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update password_reset_tokens.
     */
    data: XOR<password_reset_tokensUpdateManyMutationInput, password_reset_tokensUncheckedUpdateManyInput>
    /**
     * Filter which password_reset_tokens to update
     */
    where?: password_reset_tokensWhereInput
    /**
     * Limit how many password_reset_tokens to update.
     */
    limit?: number
  }

  /**
   * password_reset_tokens updateManyAndReturn
   */
  export type password_reset_tokensUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * The data used to update password_reset_tokens.
     */
    data: XOR<password_reset_tokensUpdateManyMutationInput, password_reset_tokensUncheckedUpdateManyInput>
    /**
     * Filter which password_reset_tokens to update
     */
    where?: password_reset_tokensWhereInput
    /**
     * Limit how many password_reset_tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * password_reset_tokens upsert
   */
  export type password_reset_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * The filter to search for the password_reset_tokens to update in case it exists.
     */
    where: password_reset_tokensWhereUniqueInput
    /**
     * In case the password_reset_tokens found by the `where` argument doesn't exist, create a new password_reset_tokens with this data.
     */
    create: XOR<password_reset_tokensCreateInput, password_reset_tokensUncheckedCreateInput>
    /**
     * In case the password_reset_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<password_reset_tokensUpdateInput, password_reset_tokensUncheckedUpdateInput>
  }

  /**
   * password_reset_tokens delete
   */
  export type password_reset_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * Filter which password_reset_tokens to delete.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens deleteMany
   */
  export type password_reset_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_reset_tokens to delete
     */
    where?: password_reset_tokensWhereInput
    /**
     * Limit how many password_reset_tokens to delete.
     */
    limit?: number
  }

  /**
   * password_reset_tokens without action
   */
  export type password_reset_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
  }


  /**
   * Model sheets
   */

  export type AggregateSheets = {
    _count: SheetsCountAggregateOutputType | null
    _avg: SheetsAvgAggregateOutputType | null
    _sum: SheetsSumAggregateOutputType | null
    _min: SheetsMinAggregateOutputType | null
    _max: SheetsMaxAggregateOutputType | null
  }

  export type SheetsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SheetsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SheetsMinAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SheetsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SheetsCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SheetsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SheetsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SheetsMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SheetsMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SheetsCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SheetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sheets to aggregate.
     */
    where?: sheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sheets to fetch.
     */
    orderBy?: sheetsOrderByWithRelationInput | sheetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sheets
    **/
    _count?: true | SheetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SheetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SheetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SheetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SheetsMaxAggregateInputType
  }

  export type GetSheetsAggregateType<T extends SheetsAggregateArgs> = {
        [P in keyof T & keyof AggregateSheets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSheets[P]>
      : GetScalarType<T[P], AggregateSheets[P]>
  }




  export type sheetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sheetsWhereInput
    orderBy?: sheetsOrderByWithAggregationInput | sheetsOrderByWithAggregationInput[]
    by: SheetsScalarFieldEnum[] | SheetsScalarFieldEnum
    having?: sheetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SheetsCountAggregateInputType | true
    _avg?: SheetsAvgAggregateInputType
    _sum?: SheetsSumAggregateInputType
    _min?: SheetsMinAggregateInputType
    _max?: SheetsMaxAggregateInputType
  }

  export type SheetsGroupByOutputType = {
    id: number
    name: string
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: SheetsCountAggregateOutputType | null
    _avg: SheetsAvgAggregateOutputType | null
    _sum: SheetsSumAggregateOutputType | null
    _min: SheetsMinAggregateOutputType | null
    _max: SheetsMaxAggregateOutputType | null
  }

  type GetSheetsGroupByPayload<T extends sheetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SheetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SheetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SheetsGroupByOutputType[P]>
            : GetScalarType<T[P], SheetsGroupByOutputType[P]>
        }
      >
    >


  export type sheetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    Fields?: boolean | sheets$FieldsArgs<ExtArgs>
    sections?: boolean | sheets$sectionsArgs<ExtArgs>
    _count?: boolean | SheetsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sheets"]>

  export type sheetsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sheets"]>

  export type sheetsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sheets"]>

  export type sheetsSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type sheetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["sheets"]>
  export type sheetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    Fields?: boolean | sheets$FieldsArgs<ExtArgs>
    sections?: boolean | sheets$sectionsArgs<ExtArgs>
    _count?: boolean | SheetsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type sheetsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type sheetsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $sheetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sheets"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      Fields: Prisma.$fieldsPayload<ExtArgs>[]
      sections: Prisma.$sectionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sheets"]>
    composites: {}
  }

  type sheetsGetPayload<S extends boolean | null | undefined | sheetsDefaultArgs> = $Result.GetResult<Prisma.$sheetsPayload, S>

  type sheetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sheetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SheetsCountAggregateInputType | true
    }

  export interface sheetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sheets'], meta: { name: 'sheets' } }
    /**
     * Find zero or one Sheets that matches the filter.
     * @param {sheetsFindUniqueArgs} args - Arguments to find a Sheets
     * @example
     * // Get one Sheets
     * const sheets = await prisma.sheets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sheetsFindUniqueArgs>(args: SelectSubset<T, sheetsFindUniqueArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sheets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sheetsFindUniqueOrThrowArgs} args - Arguments to find a Sheets
     * @example
     * // Get one Sheets
     * const sheets = await prisma.sheets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sheetsFindUniqueOrThrowArgs>(args: SelectSubset<T, sheetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheetsFindFirstArgs} args - Arguments to find a Sheets
     * @example
     * // Get one Sheets
     * const sheets = await prisma.sheets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sheetsFindFirstArgs>(args?: SelectSubset<T, sheetsFindFirstArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sheets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheetsFindFirstOrThrowArgs} args - Arguments to find a Sheets
     * @example
     * // Get one Sheets
     * const sheets = await prisma.sheets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sheetsFindFirstOrThrowArgs>(args?: SelectSubset<T, sheetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sheets
     * const sheets = await prisma.sheets.findMany()
     * 
     * // Get first 10 Sheets
     * const sheets = await prisma.sheets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sheetsWithIdOnly = await prisma.sheets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sheetsFindManyArgs>(args?: SelectSubset<T, sheetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sheets.
     * @param {sheetsCreateArgs} args - Arguments to create a Sheets.
     * @example
     * // Create one Sheets
     * const Sheets = await prisma.sheets.create({
     *   data: {
     *     // ... data to create a Sheets
     *   }
     * })
     * 
     */
    create<T extends sheetsCreateArgs>(args: SelectSubset<T, sheetsCreateArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sheets.
     * @param {sheetsCreateManyArgs} args - Arguments to create many Sheets.
     * @example
     * // Create many Sheets
     * const sheets = await prisma.sheets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sheetsCreateManyArgs>(args?: SelectSubset<T, sheetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sheets and returns the data saved in the database.
     * @param {sheetsCreateManyAndReturnArgs} args - Arguments to create many Sheets.
     * @example
     * // Create many Sheets
     * const sheets = await prisma.sheets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sheets and only return the `id`
     * const sheetsWithIdOnly = await prisma.sheets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sheetsCreateManyAndReturnArgs>(args?: SelectSubset<T, sheetsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sheets.
     * @param {sheetsDeleteArgs} args - Arguments to delete one Sheets.
     * @example
     * // Delete one Sheets
     * const Sheets = await prisma.sheets.delete({
     *   where: {
     *     // ... filter to delete one Sheets
     *   }
     * })
     * 
     */
    delete<T extends sheetsDeleteArgs>(args: SelectSubset<T, sheetsDeleteArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sheets.
     * @param {sheetsUpdateArgs} args - Arguments to update one Sheets.
     * @example
     * // Update one Sheets
     * const sheets = await prisma.sheets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sheetsUpdateArgs>(args: SelectSubset<T, sheetsUpdateArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sheets.
     * @param {sheetsDeleteManyArgs} args - Arguments to filter Sheets to delete.
     * @example
     * // Delete a few Sheets
     * const { count } = await prisma.sheets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sheetsDeleteManyArgs>(args?: SelectSubset<T, sheetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sheets
     * const sheets = await prisma.sheets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sheetsUpdateManyArgs>(args: SelectSubset<T, sheetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sheets and returns the data updated in the database.
     * @param {sheetsUpdateManyAndReturnArgs} args - Arguments to update many Sheets.
     * @example
     * // Update many Sheets
     * const sheets = await prisma.sheets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sheets and only return the `id`
     * const sheetsWithIdOnly = await prisma.sheets.updateManyAndReturn({
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
    updateManyAndReturn<T extends sheetsUpdateManyAndReturnArgs>(args: SelectSubset<T, sheetsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sheets.
     * @param {sheetsUpsertArgs} args - Arguments to update or create a Sheets.
     * @example
     * // Update or create a Sheets
     * const sheets = await prisma.sheets.upsert({
     *   create: {
     *     // ... data to create a Sheets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sheets we want to update
     *   }
     * })
     */
    upsert<T extends sheetsUpsertArgs>(args: SelectSubset<T, sheetsUpsertArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheetsCountArgs} args - Arguments to filter Sheets to count.
     * @example
     * // Count the number of Sheets
     * const count = await prisma.sheets.count({
     *   where: {
     *     // ... the filter for the Sheets we want to count
     *   }
     * })
    **/
    count<T extends sheetsCountArgs>(
      args?: Subset<T, sheetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SheetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SheetsAggregateArgs>(args: Subset<T, SheetsAggregateArgs>): Prisma.PrismaPromise<GetSheetsAggregateType<T>>

    /**
     * Group by Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheetsGroupByArgs} args - Group by arguments.
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
      T extends sheetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sheetsGroupByArgs['orderBy'] }
        : { orderBy?: sheetsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sheetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSheetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sheets model
   */
  readonly fields: sheetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sheets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sheetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Fields<T extends sheets$FieldsArgs<ExtArgs> = {}>(args?: Subset<T, sheets$FieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sections<T extends sheets$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, sheets$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the sheets model
   */
  interface sheetsFieldRefs {
    readonly id: FieldRef<"sheets", 'Int'>
    readonly name: FieldRef<"sheets", 'String'>
    readonly userId: FieldRef<"sheets", 'Int'>
    readonly createdAt: FieldRef<"sheets", 'DateTime'>
    readonly updatedAt: FieldRef<"sheets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sheets findUnique
   */
  export type sheetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
    /**
     * Filter, which sheets to fetch.
     */
    where: sheetsWhereUniqueInput
  }

  /**
   * sheets findUniqueOrThrow
   */
  export type sheetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
    /**
     * Filter, which sheets to fetch.
     */
    where: sheetsWhereUniqueInput
  }

  /**
   * sheets findFirst
   */
  export type sheetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
    /**
     * Filter, which sheets to fetch.
     */
    where?: sheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sheets to fetch.
     */
    orderBy?: sheetsOrderByWithRelationInput | sheetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sheets.
     */
    cursor?: sheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sheets.
     */
    distinct?: SheetsScalarFieldEnum | SheetsScalarFieldEnum[]
  }

  /**
   * sheets findFirstOrThrow
   */
  export type sheetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
    /**
     * Filter, which sheets to fetch.
     */
    where?: sheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sheets to fetch.
     */
    orderBy?: sheetsOrderByWithRelationInput | sheetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sheets.
     */
    cursor?: sheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sheets.
     */
    distinct?: SheetsScalarFieldEnum | SheetsScalarFieldEnum[]
  }

  /**
   * sheets findMany
   */
  export type sheetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
    /**
     * Filter, which sheets to fetch.
     */
    where?: sheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sheets to fetch.
     */
    orderBy?: sheetsOrderByWithRelationInput | sheetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sheets.
     */
    cursor?: sheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sheets.
     */
    skip?: number
    distinct?: SheetsScalarFieldEnum | SheetsScalarFieldEnum[]
  }

  /**
   * sheets create
   */
  export type sheetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
    /**
     * The data needed to create a sheets.
     */
    data: XOR<sheetsCreateInput, sheetsUncheckedCreateInput>
  }

  /**
   * sheets createMany
   */
  export type sheetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sheets.
     */
    data: sheetsCreateManyInput | sheetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sheets createManyAndReturn
   */
  export type sheetsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * The data used to create many sheets.
     */
    data: sheetsCreateManyInput | sheetsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sheets update
   */
  export type sheetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
    /**
     * The data needed to update a sheets.
     */
    data: XOR<sheetsUpdateInput, sheetsUncheckedUpdateInput>
    /**
     * Choose, which sheets to update.
     */
    where: sheetsWhereUniqueInput
  }

  /**
   * sheets updateMany
   */
  export type sheetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sheets.
     */
    data: XOR<sheetsUpdateManyMutationInput, sheetsUncheckedUpdateManyInput>
    /**
     * Filter which sheets to update
     */
    where?: sheetsWhereInput
    /**
     * Limit how many sheets to update.
     */
    limit?: number
  }

  /**
   * sheets updateManyAndReturn
   */
  export type sheetsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * The data used to update sheets.
     */
    data: XOR<sheetsUpdateManyMutationInput, sheetsUncheckedUpdateManyInput>
    /**
     * Filter which sheets to update
     */
    where?: sheetsWhereInput
    /**
     * Limit how many sheets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sheets upsert
   */
  export type sheetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
    /**
     * The filter to search for the sheets to update in case it exists.
     */
    where: sheetsWhereUniqueInput
    /**
     * In case the sheets found by the `where` argument doesn't exist, create a new sheets with this data.
     */
    create: XOR<sheetsCreateInput, sheetsUncheckedCreateInput>
    /**
     * In case the sheets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sheetsUpdateInput, sheetsUncheckedUpdateInput>
  }

  /**
   * sheets delete
   */
  export type sheetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
    /**
     * Filter which sheets to delete.
     */
    where: sheetsWhereUniqueInput
  }

  /**
   * sheets deleteMany
   */
  export type sheetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sheets to delete
     */
    where?: sheetsWhereInput
    /**
     * Limit how many sheets to delete.
     */
    limit?: number
  }

  /**
   * sheets.Fields
   */
  export type sheets$FieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    where?: fieldsWhereInput
    orderBy?: fieldsOrderByWithRelationInput | fieldsOrderByWithRelationInput[]
    cursor?: fieldsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FieldsScalarFieldEnum | FieldsScalarFieldEnum[]
  }

  /**
   * sheets.sections
   */
  export type sheets$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    where?: sectionsWhereInput
    orderBy?: sectionsOrderByWithRelationInput | sectionsOrderByWithRelationInput[]
    cursor?: sectionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionsScalarFieldEnum | SectionsScalarFieldEnum[]
  }

  /**
   * sheets without action
   */
  export type sheetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
  }


  /**
   * Model sections
   */

  export type AggregateSections = {
    _count: SectionsCountAggregateOutputType | null
    _avg: SectionsAvgAggregateOutputType | null
    _sum: SectionsSumAggregateOutputType | null
    _min: SectionsMinAggregateOutputType | null
    _max: SectionsMaxAggregateOutputType | null
  }

  export type SectionsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    sheetId: number | null
  }

  export type SectionsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    sheetId: number | null
  }

  export type SectionsMinAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
    sheetId: number | null
  }

  export type SectionsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
    sheetId: number | null
  }

  export type SectionsCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    sheetId: number
    _all: number
  }


  export type SectionsAvgAggregateInputType = {
    id?: true
    userId?: true
    sheetId?: true
  }

  export type SectionsSumAggregateInputType = {
    id?: true
    userId?: true
    sheetId?: true
  }

  export type SectionsMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    sheetId?: true
  }

  export type SectionsMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    sheetId?: true
  }

  export type SectionsCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    sheetId?: true
    _all?: true
  }

  export type SectionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sections to aggregate.
     */
    where?: sectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sections to fetch.
     */
    orderBy?: sectionsOrderByWithRelationInput | sectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sections
    **/
    _count?: true | SectionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionsMaxAggregateInputType
  }

  export type GetSectionsAggregateType<T extends SectionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSections]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSections[P]>
      : GetScalarType<T[P], AggregateSections[P]>
  }




  export type sectionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sectionsWhereInput
    orderBy?: sectionsOrderByWithAggregationInput | sectionsOrderByWithAggregationInput[]
    by: SectionsScalarFieldEnum[] | SectionsScalarFieldEnum
    having?: sectionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionsCountAggregateInputType | true
    _avg?: SectionsAvgAggregateInputType
    _sum?: SectionsSumAggregateInputType
    _min?: SectionsMinAggregateInputType
    _max?: SectionsMaxAggregateInputType
  }

  export type SectionsGroupByOutputType = {
    id: number
    name: string
    userId: number
    sheetId: number
    _count: SectionsCountAggregateOutputType | null
    _avg: SectionsAvgAggregateOutputType | null
    _sum: SectionsSumAggregateOutputType | null
    _min: SectionsMinAggregateOutputType | null
    _max: SectionsMaxAggregateOutputType | null
  }

  type GetSectionsGroupByPayload<T extends sectionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionsGroupByOutputType[P]>
            : GetScalarType<T[P], SectionsGroupByOutputType[P]>
        }
      >
    >


  export type sectionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    sheetId?: boolean
    sheet?: boolean | sheetsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    Fields?: boolean | sections$FieldsArgs<ExtArgs>
    _count?: boolean | SectionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sections"]>

  export type sectionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    sheetId?: boolean
    sheet?: boolean | sheetsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sections"]>

  export type sectionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    sheetId?: boolean
    sheet?: boolean | sheetsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sections"]>

  export type sectionsSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    sheetId?: boolean
  }

  export type sectionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "sheetId", ExtArgs["result"]["sections"]>
  export type sectionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | sheetsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    Fields?: boolean | sections$FieldsArgs<ExtArgs>
    _count?: boolean | SectionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type sectionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | sheetsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type sectionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | sheetsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $sectionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sections"
    objects: {
      sheet: Prisma.$sheetsPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
      Fields: Prisma.$fieldsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      userId: number
      sheetId: number
    }, ExtArgs["result"]["sections"]>
    composites: {}
  }

  type sectionsGetPayload<S extends boolean | null | undefined | sectionsDefaultArgs> = $Result.GetResult<Prisma.$sectionsPayload, S>

  type sectionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sectionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionsCountAggregateInputType | true
    }

  export interface sectionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sections'], meta: { name: 'sections' } }
    /**
     * Find zero or one Sections that matches the filter.
     * @param {sectionsFindUniqueArgs} args - Arguments to find a Sections
     * @example
     * // Get one Sections
     * const sections = await prisma.sections.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sectionsFindUniqueArgs>(args: SelectSubset<T, sectionsFindUniqueArgs<ExtArgs>>): Prisma__sectionsClient<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sections that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sectionsFindUniqueOrThrowArgs} args - Arguments to find a Sections
     * @example
     * // Get one Sections
     * const sections = await prisma.sections.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sectionsFindUniqueOrThrowArgs>(args: SelectSubset<T, sectionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sectionsClient<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionsFindFirstArgs} args - Arguments to find a Sections
     * @example
     * // Get one Sections
     * const sections = await prisma.sections.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sectionsFindFirstArgs>(args?: SelectSubset<T, sectionsFindFirstArgs<ExtArgs>>): Prisma__sectionsClient<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sections that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionsFindFirstOrThrowArgs} args - Arguments to find a Sections
     * @example
     * // Get one Sections
     * const sections = await prisma.sections.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sectionsFindFirstOrThrowArgs>(args?: SelectSubset<T, sectionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sectionsClient<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.sections.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.sections.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionsWithIdOnly = await prisma.sections.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sectionsFindManyArgs>(args?: SelectSubset<T, sectionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sections.
     * @param {sectionsCreateArgs} args - Arguments to create a Sections.
     * @example
     * // Create one Sections
     * const Sections = await prisma.sections.create({
     *   data: {
     *     // ... data to create a Sections
     *   }
     * })
     * 
     */
    create<T extends sectionsCreateArgs>(args: SelectSubset<T, sectionsCreateArgs<ExtArgs>>): Prisma__sectionsClient<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {sectionsCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const sections = await prisma.sections.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sectionsCreateManyArgs>(args?: SelectSubset<T, sectionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sections and returns the data saved in the database.
     * @param {sectionsCreateManyAndReturnArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const sections = await prisma.sections.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sections and only return the `id`
     * const sectionsWithIdOnly = await prisma.sections.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sectionsCreateManyAndReturnArgs>(args?: SelectSubset<T, sectionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sections.
     * @param {sectionsDeleteArgs} args - Arguments to delete one Sections.
     * @example
     * // Delete one Sections
     * const Sections = await prisma.sections.delete({
     *   where: {
     *     // ... filter to delete one Sections
     *   }
     * })
     * 
     */
    delete<T extends sectionsDeleteArgs>(args: SelectSubset<T, sectionsDeleteArgs<ExtArgs>>): Prisma__sectionsClient<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sections.
     * @param {sectionsUpdateArgs} args - Arguments to update one Sections.
     * @example
     * // Update one Sections
     * const sections = await prisma.sections.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sectionsUpdateArgs>(args: SelectSubset<T, sectionsUpdateArgs<ExtArgs>>): Prisma__sectionsClient<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {sectionsDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.sections.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sectionsDeleteManyArgs>(args?: SelectSubset<T, sectionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const sections = await prisma.sections.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sectionsUpdateManyArgs>(args: SelectSubset<T, sectionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections and returns the data updated in the database.
     * @param {sectionsUpdateManyAndReturnArgs} args - Arguments to update many Sections.
     * @example
     * // Update many Sections
     * const sections = await prisma.sections.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sections and only return the `id`
     * const sectionsWithIdOnly = await prisma.sections.updateManyAndReturn({
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
    updateManyAndReturn<T extends sectionsUpdateManyAndReturnArgs>(args: SelectSubset<T, sectionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sections.
     * @param {sectionsUpsertArgs} args - Arguments to update or create a Sections.
     * @example
     * // Update or create a Sections
     * const sections = await prisma.sections.upsert({
     *   create: {
     *     // ... data to create a Sections
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sections we want to update
     *   }
     * })
     */
    upsert<T extends sectionsUpsertArgs>(args: SelectSubset<T, sectionsUpsertArgs<ExtArgs>>): Prisma__sectionsClient<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionsCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.sections.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends sectionsCountArgs>(
      args?: Subset<T, sectionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionsAggregateArgs>(args: Subset<T, SectionsAggregateArgs>): Prisma.PrismaPromise<GetSectionsAggregateType<T>>

    /**
     * Group by Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionsGroupByArgs} args - Group by arguments.
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
      T extends sectionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sectionsGroupByArgs['orderBy'] }
        : { orderBy?: sectionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sectionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sections model
   */
  readonly fields: sectionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sections.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sectionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sheet<T extends sheetsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sheetsDefaultArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Fields<T extends sections$FieldsArgs<ExtArgs> = {}>(args?: Subset<T, sections$FieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the sections model
   */
  interface sectionsFieldRefs {
    readonly id: FieldRef<"sections", 'Int'>
    readonly name: FieldRef<"sections", 'String'>
    readonly userId: FieldRef<"sections", 'Int'>
    readonly sheetId: FieldRef<"sections", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * sections findUnique
   */
  export type sectionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    /**
     * Filter, which sections to fetch.
     */
    where: sectionsWhereUniqueInput
  }

  /**
   * sections findUniqueOrThrow
   */
  export type sectionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    /**
     * Filter, which sections to fetch.
     */
    where: sectionsWhereUniqueInput
  }

  /**
   * sections findFirst
   */
  export type sectionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    /**
     * Filter, which sections to fetch.
     */
    where?: sectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sections to fetch.
     */
    orderBy?: sectionsOrderByWithRelationInput | sectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sections.
     */
    cursor?: sectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sections.
     */
    distinct?: SectionsScalarFieldEnum | SectionsScalarFieldEnum[]
  }

  /**
   * sections findFirstOrThrow
   */
  export type sectionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    /**
     * Filter, which sections to fetch.
     */
    where?: sectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sections to fetch.
     */
    orderBy?: sectionsOrderByWithRelationInput | sectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sections.
     */
    cursor?: sectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sections.
     */
    distinct?: SectionsScalarFieldEnum | SectionsScalarFieldEnum[]
  }

  /**
   * sections findMany
   */
  export type sectionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    /**
     * Filter, which sections to fetch.
     */
    where?: sectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sections to fetch.
     */
    orderBy?: sectionsOrderByWithRelationInput | sectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sections.
     */
    cursor?: sectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sections.
     */
    skip?: number
    distinct?: SectionsScalarFieldEnum | SectionsScalarFieldEnum[]
  }

  /**
   * sections create
   */
  export type sectionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    /**
     * The data needed to create a sections.
     */
    data: XOR<sectionsCreateInput, sectionsUncheckedCreateInput>
  }

  /**
   * sections createMany
   */
  export type sectionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sections.
     */
    data: sectionsCreateManyInput | sectionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sections createManyAndReturn
   */
  export type sectionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * The data used to create many sections.
     */
    data: sectionsCreateManyInput | sectionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sections update
   */
  export type sectionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    /**
     * The data needed to update a sections.
     */
    data: XOR<sectionsUpdateInput, sectionsUncheckedUpdateInput>
    /**
     * Choose, which sections to update.
     */
    where: sectionsWhereUniqueInput
  }

  /**
   * sections updateMany
   */
  export type sectionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sections.
     */
    data: XOR<sectionsUpdateManyMutationInput, sectionsUncheckedUpdateManyInput>
    /**
     * Filter which sections to update
     */
    where?: sectionsWhereInput
    /**
     * Limit how many sections to update.
     */
    limit?: number
  }

  /**
   * sections updateManyAndReturn
   */
  export type sectionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * The data used to update sections.
     */
    data: XOR<sectionsUpdateManyMutationInput, sectionsUncheckedUpdateManyInput>
    /**
     * Filter which sections to update
     */
    where?: sectionsWhereInput
    /**
     * Limit how many sections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sections upsert
   */
  export type sectionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    /**
     * The filter to search for the sections to update in case it exists.
     */
    where: sectionsWhereUniqueInput
    /**
     * In case the sections found by the `where` argument doesn't exist, create a new sections with this data.
     */
    create: XOR<sectionsCreateInput, sectionsUncheckedCreateInput>
    /**
     * In case the sections was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sectionsUpdateInput, sectionsUncheckedUpdateInput>
  }

  /**
   * sections delete
   */
  export type sectionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    /**
     * Filter which sections to delete.
     */
    where: sectionsWhereUniqueInput
  }

  /**
   * sections deleteMany
   */
  export type sectionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sections to delete
     */
    where?: sectionsWhereInput
    /**
     * Limit how many sections to delete.
     */
    limit?: number
  }

  /**
   * sections.Fields
   */
  export type sections$FieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    where?: fieldsWhereInput
    orderBy?: fieldsOrderByWithRelationInput | fieldsOrderByWithRelationInput[]
    cursor?: fieldsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FieldsScalarFieldEnum | FieldsScalarFieldEnum[]
  }

  /**
   * sections without action
   */
  export type sectionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
  }


  /**
   * Model fields
   */

  export type AggregateFields = {
    _count: FieldsCountAggregateOutputType | null
    _avg: FieldsAvgAggregateOutputType | null
    _sum: FieldsSumAggregateOutputType | null
    _min: FieldsMinAggregateOutputType | null
    _max: FieldsMaxAggregateOutputType | null
  }

  export type FieldsAvgAggregateOutputType = {
    id: number | null
    sheetId: number | null
    x: number | null
    y: number | null
    h: number | null
    w: number | null
    sectionId: number | null
  }

  export type FieldsSumAggregateOutputType = {
    id: number | null
    sheetId: number | null
    x: number | null
    y: number | null
    h: number | null
    w: number | null
    sectionId: number | null
  }

  export type FieldsMinAggregateOutputType = {
    id: number | null
    sheetId: number | null
    name: string | null
    value: string | null
    color: string | null
    type: string | null
    x: number | null
    y: number | null
    h: number | null
    w: number | null
    createdAt: Date | null
    updatedAt: Date | null
    sectionId: number | null
  }

  export type FieldsMaxAggregateOutputType = {
    id: number | null
    sheetId: number | null
    name: string | null
    value: string | null
    color: string | null
    type: string | null
    x: number | null
    y: number | null
    h: number | null
    w: number | null
    createdAt: Date | null
    updatedAt: Date | null
    sectionId: number | null
  }

  export type FieldsCountAggregateOutputType = {
    id: number
    sheetId: number
    name: number
    value: number
    color: number
    type: number
    x: number
    y: number
    h: number
    w: number
    createdAt: number
    updatedAt: number
    sectionId: number
    _all: number
  }


  export type FieldsAvgAggregateInputType = {
    id?: true
    sheetId?: true
    x?: true
    y?: true
    h?: true
    w?: true
    sectionId?: true
  }

  export type FieldsSumAggregateInputType = {
    id?: true
    sheetId?: true
    x?: true
    y?: true
    h?: true
    w?: true
    sectionId?: true
  }

  export type FieldsMinAggregateInputType = {
    id?: true
    sheetId?: true
    name?: true
    value?: true
    color?: true
    type?: true
    x?: true
    y?: true
    h?: true
    w?: true
    createdAt?: true
    updatedAt?: true
    sectionId?: true
  }

  export type FieldsMaxAggregateInputType = {
    id?: true
    sheetId?: true
    name?: true
    value?: true
    color?: true
    type?: true
    x?: true
    y?: true
    h?: true
    w?: true
    createdAt?: true
    updatedAt?: true
    sectionId?: true
  }

  export type FieldsCountAggregateInputType = {
    id?: true
    sheetId?: true
    name?: true
    value?: true
    color?: true
    type?: true
    x?: true
    y?: true
    h?: true
    w?: true
    createdAt?: true
    updatedAt?: true
    sectionId?: true
    _all?: true
  }

  export type FieldsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fields to aggregate.
     */
    where?: fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fields to fetch.
     */
    orderBy?: fieldsOrderByWithRelationInput | fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fields
    **/
    _count?: true | FieldsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FieldsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FieldsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FieldsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FieldsMaxAggregateInputType
  }

  export type GetFieldsAggregateType<T extends FieldsAggregateArgs> = {
        [P in keyof T & keyof AggregateFields]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFields[P]>
      : GetScalarType<T[P], AggregateFields[P]>
  }




  export type fieldsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fieldsWhereInput
    orderBy?: fieldsOrderByWithAggregationInput | fieldsOrderByWithAggregationInput[]
    by: FieldsScalarFieldEnum[] | FieldsScalarFieldEnum
    having?: fieldsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FieldsCountAggregateInputType | true
    _avg?: FieldsAvgAggregateInputType
    _sum?: FieldsSumAggregateInputType
    _min?: FieldsMinAggregateInputType
    _max?: FieldsMaxAggregateInputType
  }

  export type FieldsGroupByOutputType = {
    id: number
    sheetId: number
    name: string
    value: string | null
    color: string | null
    type: string | null
    x: number
    y: number
    h: number
    w: number
    createdAt: Date
    updatedAt: Date
    sectionId: number | null
    _count: FieldsCountAggregateOutputType | null
    _avg: FieldsAvgAggregateOutputType | null
    _sum: FieldsSumAggregateOutputType | null
    _min: FieldsMinAggregateOutputType | null
    _max: FieldsMaxAggregateOutputType | null
  }

  type GetFieldsGroupByPayload<T extends fieldsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FieldsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FieldsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FieldsGroupByOutputType[P]>
            : GetScalarType<T[P], FieldsGroupByOutputType[P]>
        }
      >
    >


  export type fieldsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sheetId?: boolean
    name?: boolean
    value?: boolean
    color?: boolean
    type?: boolean
    x?: boolean
    y?: boolean
    h?: boolean
    w?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sectionId?: boolean
    sheet?: boolean | sheetsDefaultArgs<ExtArgs>
    sections?: boolean | fields$sectionsArgs<ExtArgs>
  }, ExtArgs["result"]["fields"]>

  export type fieldsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sheetId?: boolean
    name?: boolean
    value?: boolean
    color?: boolean
    type?: boolean
    x?: boolean
    y?: boolean
    h?: boolean
    w?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sectionId?: boolean
    sheet?: boolean | sheetsDefaultArgs<ExtArgs>
    sections?: boolean | fields$sectionsArgs<ExtArgs>
  }, ExtArgs["result"]["fields"]>

  export type fieldsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sheetId?: boolean
    name?: boolean
    value?: boolean
    color?: boolean
    type?: boolean
    x?: boolean
    y?: boolean
    h?: boolean
    w?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sectionId?: boolean
    sheet?: boolean | sheetsDefaultArgs<ExtArgs>
    sections?: boolean | fields$sectionsArgs<ExtArgs>
  }, ExtArgs["result"]["fields"]>

  export type fieldsSelectScalar = {
    id?: boolean
    sheetId?: boolean
    name?: boolean
    value?: boolean
    color?: boolean
    type?: boolean
    x?: boolean
    y?: boolean
    h?: boolean
    w?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sectionId?: boolean
  }

  export type fieldsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sheetId" | "name" | "value" | "color" | "type" | "x" | "y" | "h" | "w" | "createdAt" | "updatedAt" | "sectionId", ExtArgs["result"]["fields"]>
  export type fieldsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | sheetsDefaultArgs<ExtArgs>
    sections?: boolean | fields$sectionsArgs<ExtArgs>
  }
  export type fieldsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | sheetsDefaultArgs<ExtArgs>
    sections?: boolean | fields$sectionsArgs<ExtArgs>
  }
  export type fieldsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | sheetsDefaultArgs<ExtArgs>
    sections?: boolean | fields$sectionsArgs<ExtArgs>
  }

  export type $fieldsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fields"
    objects: {
      sheet: Prisma.$sheetsPayload<ExtArgs>
      sections: Prisma.$sectionsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sheetId: number
      name: string
      value: string | null
      color: string | null
      type: string | null
      x: number
      y: number
      h: number
      w: number
      createdAt: Date
      updatedAt: Date
      sectionId: number | null
    }, ExtArgs["result"]["fields"]>
    composites: {}
  }

  type fieldsGetPayload<S extends boolean | null | undefined | fieldsDefaultArgs> = $Result.GetResult<Prisma.$fieldsPayload, S>

  type fieldsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fieldsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FieldsCountAggregateInputType | true
    }

  export interface fieldsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fields'], meta: { name: 'fields' } }
    /**
     * Find zero or one Fields that matches the filter.
     * @param {fieldsFindUniqueArgs} args - Arguments to find a Fields
     * @example
     * // Get one Fields
     * const fields = await prisma.fields.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fieldsFindUniqueArgs>(args: SelectSubset<T, fieldsFindUniqueArgs<ExtArgs>>): Prisma__fieldsClient<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fields that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fieldsFindUniqueOrThrowArgs} args - Arguments to find a Fields
     * @example
     * // Get one Fields
     * const fields = await prisma.fields.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fieldsFindUniqueOrThrowArgs>(args: SelectSubset<T, fieldsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fieldsClient<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldsFindFirstArgs} args - Arguments to find a Fields
     * @example
     * // Get one Fields
     * const fields = await prisma.fields.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fieldsFindFirstArgs>(args?: SelectSubset<T, fieldsFindFirstArgs<ExtArgs>>): Prisma__fieldsClient<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fields that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldsFindFirstOrThrowArgs} args - Arguments to find a Fields
     * @example
     * // Get one Fields
     * const fields = await prisma.fields.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fieldsFindFirstOrThrowArgs>(args?: SelectSubset<T, fieldsFindFirstOrThrowArgs<ExtArgs>>): Prisma__fieldsClient<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fields
     * const fields = await prisma.fields.findMany()
     * 
     * // Get first 10 Fields
     * const fields = await prisma.fields.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fieldsWithIdOnly = await prisma.fields.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends fieldsFindManyArgs>(args?: SelectSubset<T, fieldsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fields.
     * @param {fieldsCreateArgs} args - Arguments to create a Fields.
     * @example
     * // Create one Fields
     * const Fields = await prisma.fields.create({
     *   data: {
     *     // ... data to create a Fields
     *   }
     * })
     * 
     */
    create<T extends fieldsCreateArgs>(args: SelectSubset<T, fieldsCreateArgs<ExtArgs>>): Prisma__fieldsClient<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fields.
     * @param {fieldsCreateManyArgs} args - Arguments to create many Fields.
     * @example
     * // Create many Fields
     * const fields = await prisma.fields.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fieldsCreateManyArgs>(args?: SelectSubset<T, fieldsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fields and returns the data saved in the database.
     * @param {fieldsCreateManyAndReturnArgs} args - Arguments to create many Fields.
     * @example
     * // Create many Fields
     * const fields = await prisma.fields.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fields and only return the `id`
     * const fieldsWithIdOnly = await prisma.fields.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends fieldsCreateManyAndReturnArgs>(args?: SelectSubset<T, fieldsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fields.
     * @param {fieldsDeleteArgs} args - Arguments to delete one Fields.
     * @example
     * // Delete one Fields
     * const Fields = await prisma.fields.delete({
     *   where: {
     *     // ... filter to delete one Fields
     *   }
     * })
     * 
     */
    delete<T extends fieldsDeleteArgs>(args: SelectSubset<T, fieldsDeleteArgs<ExtArgs>>): Prisma__fieldsClient<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fields.
     * @param {fieldsUpdateArgs} args - Arguments to update one Fields.
     * @example
     * // Update one Fields
     * const fields = await prisma.fields.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fieldsUpdateArgs>(args: SelectSubset<T, fieldsUpdateArgs<ExtArgs>>): Prisma__fieldsClient<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fields.
     * @param {fieldsDeleteManyArgs} args - Arguments to filter Fields to delete.
     * @example
     * // Delete a few Fields
     * const { count } = await prisma.fields.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fieldsDeleteManyArgs>(args?: SelectSubset<T, fieldsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fields
     * const fields = await prisma.fields.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fieldsUpdateManyArgs>(args: SelectSubset<T, fieldsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fields and returns the data updated in the database.
     * @param {fieldsUpdateManyAndReturnArgs} args - Arguments to update many Fields.
     * @example
     * // Update many Fields
     * const fields = await prisma.fields.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fields and only return the `id`
     * const fieldsWithIdOnly = await prisma.fields.updateManyAndReturn({
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
    updateManyAndReturn<T extends fieldsUpdateManyAndReturnArgs>(args: SelectSubset<T, fieldsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fields.
     * @param {fieldsUpsertArgs} args - Arguments to update or create a Fields.
     * @example
     * // Update or create a Fields
     * const fields = await prisma.fields.upsert({
     *   create: {
     *     // ... data to create a Fields
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fields we want to update
     *   }
     * })
     */
    upsert<T extends fieldsUpsertArgs>(args: SelectSubset<T, fieldsUpsertArgs<ExtArgs>>): Prisma__fieldsClient<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldsCountArgs} args - Arguments to filter Fields to count.
     * @example
     * // Count the number of Fields
     * const count = await prisma.fields.count({
     *   where: {
     *     // ... the filter for the Fields we want to count
     *   }
     * })
    **/
    count<T extends fieldsCountArgs>(
      args?: Subset<T, fieldsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FieldsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FieldsAggregateArgs>(args: Subset<T, FieldsAggregateArgs>): Prisma.PrismaPromise<GetFieldsAggregateType<T>>

    /**
     * Group by Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldsGroupByArgs} args - Group by arguments.
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
      T extends fieldsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fieldsGroupByArgs['orderBy'] }
        : { orderBy?: fieldsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, fieldsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFieldsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fields model
   */
  readonly fields: fieldsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fields.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fieldsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sheet<T extends sheetsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sheetsDefaultArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sections<T extends fields$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, fields$sectionsArgs<ExtArgs>>): Prisma__sectionsClient<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the fields model
   */
  interface fieldsFieldRefs {
    readonly id: FieldRef<"fields", 'Int'>
    readonly sheetId: FieldRef<"fields", 'Int'>
    readonly name: FieldRef<"fields", 'String'>
    readonly value: FieldRef<"fields", 'String'>
    readonly color: FieldRef<"fields", 'String'>
    readonly type: FieldRef<"fields", 'String'>
    readonly x: FieldRef<"fields", 'Float'>
    readonly y: FieldRef<"fields", 'Float'>
    readonly h: FieldRef<"fields", 'Float'>
    readonly w: FieldRef<"fields", 'Float'>
    readonly createdAt: FieldRef<"fields", 'DateTime'>
    readonly updatedAt: FieldRef<"fields", 'DateTime'>
    readonly sectionId: FieldRef<"fields", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * fields findUnique
   */
  export type fieldsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    /**
     * Filter, which fields to fetch.
     */
    where: fieldsWhereUniqueInput
  }

  /**
   * fields findUniqueOrThrow
   */
  export type fieldsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    /**
     * Filter, which fields to fetch.
     */
    where: fieldsWhereUniqueInput
  }

  /**
   * fields findFirst
   */
  export type fieldsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    /**
     * Filter, which fields to fetch.
     */
    where?: fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fields to fetch.
     */
    orderBy?: fieldsOrderByWithRelationInput | fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fields.
     */
    cursor?: fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fields.
     */
    distinct?: FieldsScalarFieldEnum | FieldsScalarFieldEnum[]
  }

  /**
   * fields findFirstOrThrow
   */
  export type fieldsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    /**
     * Filter, which fields to fetch.
     */
    where?: fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fields to fetch.
     */
    orderBy?: fieldsOrderByWithRelationInput | fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fields.
     */
    cursor?: fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fields.
     */
    distinct?: FieldsScalarFieldEnum | FieldsScalarFieldEnum[]
  }

  /**
   * fields findMany
   */
  export type fieldsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    /**
     * Filter, which fields to fetch.
     */
    where?: fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fields to fetch.
     */
    orderBy?: fieldsOrderByWithRelationInput | fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fields.
     */
    cursor?: fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fields.
     */
    skip?: number
    distinct?: FieldsScalarFieldEnum | FieldsScalarFieldEnum[]
  }

  /**
   * fields create
   */
  export type fieldsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    /**
     * The data needed to create a fields.
     */
    data: XOR<fieldsCreateInput, fieldsUncheckedCreateInput>
  }

  /**
   * fields createMany
   */
  export type fieldsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fields.
     */
    data: fieldsCreateManyInput | fieldsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fields createManyAndReturn
   */
  export type fieldsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * The data used to create many fields.
     */
    data: fieldsCreateManyInput | fieldsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * fields update
   */
  export type fieldsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    /**
     * The data needed to update a fields.
     */
    data: XOR<fieldsUpdateInput, fieldsUncheckedUpdateInput>
    /**
     * Choose, which fields to update.
     */
    where: fieldsWhereUniqueInput
  }

  /**
   * fields updateMany
   */
  export type fieldsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fields.
     */
    data: XOR<fieldsUpdateManyMutationInput, fieldsUncheckedUpdateManyInput>
    /**
     * Filter which fields to update
     */
    where?: fieldsWhereInput
    /**
     * Limit how many fields to update.
     */
    limit?: number
  }

  /**
   * fields updateManyAndReturn
   */
  export type fieldsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * The data used to update fields.
     */
    data: XOR<fieldsUpdateManyMutationInput, fieldsUncheckedUpdateManyInput>
    /**
     * Filter which fields to update
     */
    where?: fieldsWhereInput
    /**
     * Limit how many fields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * fields upsert
   */
  export type fieldsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    /**
     * The filter to search for the fields to update in case it exists.
     */
    where: fieldsWhereUniqueInput
    /**
     * In case the fields found by the `where` argument doesn't exist, create a new fields with this data.
     */
    create: XOR<fieldsCreateInput, fieldsUncheckedCreateInput>
    /**
     * In case the fields was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fieldsUpdateInput, fieldsUncheckedUpdateInput>
  }

  /**
   * fields delete
   */
  export type fieldsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    /**
     * Filter which fields to delete.
     */
    where: fieldsWhereUniqueInput
  }

  /**
   * fields deleteMany
   */
  export type fieldsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fields to delete
     */
    where?: fieldsWhereInput
    /**
     * Limit how many fields to delete.
     */
    limit?: number
  }

  /**
   * fields.sections
   */
  export type fields$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    where?: sectionsWhereInput
  }

  /**
   * fields without action
   */
  export type fieldsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    recoveryTokens: 'recoveryTokens',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Password_reset_tokensScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type Password_reset_tokensScalarFieldEnum = (typeof Password_reset_tokensScalarFieldEnum)[keyof typeof Password_reset_tokensScalarFieldEnum]


  export const SheetsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SheetsScalarFieldEnum = (typeof SheetsScalarFieldEnum)[keyof typeof SheetsScalarFieldEnum]


  export const SectionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    sheetId: 'sheetId'
  };

  export type SectionsScalarFieldEnum = (typeof SectionsScalarFieldEnum)[keyof typeof SectionsScalarFieldEnum]


  export const FieldsScalarFieldEnum: {
    id: 'id',
    sheetId: 'sheetId',
    name: 'name',
    value: 'value',
    color: 'color',
    type: 'type',
    x: 'x',
    y: 'y',
    h: 'h',
    w: 'w',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    sectionId: 'sectionId'
  };

  export type FieldsScalarFieldEnum = (typeof FieldsScalarFieldEnum)[keyof typeof FieldsScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    recoveryTokens?: StringNullableListFilter<"users">
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    PasswordResetToken?: Password_reset_tokensListRelationFilter
    sheets?: SheetsListRelationFilter
    sections?: SectionsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    recoveryTokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    PasswordResetToken?: password_reset_tokensOrderByRelationAggregateInput
    sheets?: sheetsOrderByRelationAggregateInput
    sections?: sectionsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    recoveryTokens?: StringNullableListFilter<"users">
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    PasswordResetToken?: Password_reset_tokensListRelationFilter
    sheets?: SheetsListRelationFilter
    sections?: SectionsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    recoveryTokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    recoveryTokens?: StringNullableListFilter<"users">
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type password_reset_tokensWhereInput = {
    AND?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    OR?: password_reset_tokensWhereInput[]
    NOT?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    id?: IntFilter<"password_reset_tokens"> | number
    token?: StringFilter<"password_reset_tokens"> | string
    userId?: IntFilter<"password_reset_tokens"> | number
    expiresAt?: DateTimeFilter<"password_reset_tokens"> | Date | string
    createdAt?: DateTimeFilter<"password_reset_tokens"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type password_reset_tokensOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type password_reset_tokensWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    OR?: password_reset_tokensWhereInput[]
    NOT?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    userId?: IntFilter<"password_reset_tokens"> | number
    expiresAt?: DateTimeFilter<"password_reset_tokens"> | Date | string
    createdAt?: DateTimeFilter<"password_reset_tokens"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "token">

  export type password_reset_tokensOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: password_reset_tokensCountOrderByAggregateInput
    _avg?: password_reset_tokensAvgOrderByAggregateInput
    _max?: password_reset_tokensMaxOrderByAggregateInput
    _min?: password_reset_tokensMinOrderByAggregateInput
    _sum?: password_reset_tokensSumOrderByAggregateInput
  }

  export type password_reset_tokensScalarWhereWithAggregatesInput = {
    AND?: password_reset_tokensScalarWhereWithAggregatesInput | password_reset_tokensScalarWhereWithAggregatesInput[]
    OR?: password_reset_tokensScalarWhereWithAggregatesInput[]
    NOT?: password_reset_tokensScalarWhereWithAggregatesInput | password_reset_tokensScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"password_reset_tokens"> | number
    token?: StringWithAggregatesFilter<"password_reset_tokens"> | string
    userId?: IntWithAggregatesFilter<"password_reset_tokens"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"password_reset_tokens"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"password_reset_tokens"> | Date | string
  }

  export type sheetsWhereInput = {
    AND?: sheetsWhereInput | sheetsWhereInput[]
    OR?: sheetsWhereInput[]
    NOT?: sheetsWhereInput | sheetsWhereInput[]
    id?: IntFilter<"sheets"> | number
    name?: StringFilter<"sheets"> | string
    userId?: IntFilter<"sheets"> | number
    createdAt?: DateTimeFilter<"sheets"> | Date | string
    updatedAt?: DateTimeFilter<"sheets"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    Fields?: FieldsListRelationFilter
    sections?: SectionsListRelationFilter
  }

  export type sheetsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: usersOrderByWithRelationInput
    Fields?: fieldsOrderByRelationAggregateInput
    sections?: sectionsOrderByRelationAggregateInput
  }

  export type sheetsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sheetsWhereInput | sheetsWhereInput[]
    OR?: sheetsWhereInput[]
    NOT?: sheetsWhereInput | sheetsWhereInput[]
    name?: StringFilter<"sheets"> | string
    userId?: IntFilter<"sheets"> | number
    createdAt?: DateTimeFilter<"sheets"> | Date | string
    updatedAt?: DateTimeFilter<"sheets"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    Fields?: FieldsListRelationFilter
    sections?: SectionsListRelationFilter
  }, "id">

  export type sheetsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: sheetsCountOrderByAggregateInput
    _avg?: sheetsAvgOrderByAggregateInput
    _max?: sheetsMaxOrderByAggregateInput
    _min?: sheetsMinOrderByAggregateInput
    _sum?: sheetsSumOrderByAggregateInput
  }

  export type sheetsScalarWhereWithAggregatesInput = {
    AND?: sheetsScalarWhereWithAggregatesInput | sheetsScalarWhereWithAggregatesInput[]
    OR?: sheetsScalarWhereWithAggregatesInput[]
    NOT?: sheetsScalarWhereWithAggregatesInput | sheetsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sheets"> | number
    name?: StringWithAggregatesFilter<"sheets"> | string
    userId?: IntWithAggregatesFilter<"sheets"> | number
    createdAt?: DateTimeWithAggregatesFilter<"sheets"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"sheets"> | Date | string
  }

  export type sectionsWhereInput = {
    AND?: sectionsWhereInput | sectionsWhereInput[]
    OR?: sectionsWhereInput[]
    NOT?: sectionsWhereInput | sectionsWhereInput[]
    id?: IntFilter<"sections"> | number
    name?: StringFilter<"sections"> | string
    userId?: IntFilter<"sections"> | number
    sheetId?: IntFilter<"sections"> | number
    sheet?: XOR<SheetsScalarRelationFilter, sheetsWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    Fields?: FieldsListRelationFilter
  }

  export type sectionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrder
    sheet?: sheetsOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
    Fields?: fieldsOrderByRelationAggregateInput
  }

  export type sectionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sectionsWhereInput | sectionsWhereInput[]
    OR?: sectionsWhereInput[]
    NOT?: sectionsWhereInput | sectionsWhereInput[]
    name?: StringFilter<"sections"> | string
    userId?: IntFilter<"sections"> | number
    sheetId?: IntFilter<"sections"> | number
    sheet?: XOR<SheetsScalarRelationFilter, sheetsWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    Fields?: FieldsListRelationFilter
  }, "id">

  export type sectionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrder
    _count?: sectionsCountOrderByAggregateInput
    _avg?: sectionsAvgOrderByAggregateInput
    _max?: sectionsMaxOrderByAggregateInput
    _min?: sectionsMinOrderByAggregateInput
    _sum?: sectionsSumOrderByAggregateInput
  }

  export type sectionsScalarWhereWithAggregatesInput = {
    AND?: sectionsScalarWhereWithAggregatesInput | sectionsScalarWhereWithAggregatesInput[]
    OR?: sectionsScalarWhereWithAggregatesInput[]
    NOT?: sectionsScalarWhereWithAggregatesInput | sectionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sections"> | number
    name?: StringWithAggregatesFilter<"sections"> | string
    userId?: IntWithAggregatesFilter<"sections"> | number
    sheetId?: IntWithAggregatesFilter<"sections"> | number
  }

  export type fieldsWhereInput = {
    AND?: fieldsWhereInput | fieldsWhereInput[]
    OR?: fieldsWhereInput[]
    NOT?: fieldsWhereInput | fieldsWhereInput[]
    id?: IntFilter<"fields"> | number
    sheetId?: IntFilter<"fields"> | number
    name?: StringFilter<"fields"> | string
    value?: StringNullableFilter<"fields"> | string | null
    color?: StringNullableFilter<"fields"> | string | null
    type?: StringNullableFilter<"fields"> | string | null
    x?: FloatFilter<"fields"> | number
    y?: FloatFilter<"fields"> | number
    h?: FloatFilter<"fields"> | number
    w?: FloatFilter<"fields"> | number
    createdAt?: DateTimeFilter<"fields"> | Date | string
    updatedAt?: DateTimeFilter<"fields"> | Date | string
    sectionId?: IntNullableFilter<"fields"> | number | null
    sheet?: XOR<SheetsScalarRelationFilter, sheetsWhereInput>
    sections?: XOR<SectionsNullableScalarRelationFilter, sectionsWhereInput> | null
  }

  export type fieldsOrderByWithRelationInput = {
    id?: SortOrder
    sheetId?: SortOrder
    name?: SortOrder
    value?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    x?: SortOrder
    y?: SortOrder
    h?: SortOrder
    w?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sectionId?: SortOrderInput | SortOrder
    sheet?: sheetsOrderByWithRelationInput
    sections?: sectionsOrderByWithRelationInput
  }

  export type fieldsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: fieldsWhereInput | fieldsWhereInput[]
    OR?: fieldsWhereInput[]
    NOT?: fieldsWhereInput | fieldsWhereInput[]
    sheetId?: IntFilter<"fields"> | number
    name?: StringFilter<"fields"> | string
    value?: StringNullableFilter<"fields"> | string | null
    color?: StringNullableFilter<"fields"> | string | null
    type?: StringNullableFilter<"fields"> | string | null
    x?: FloatFilter<"fields"> | number
    y?: FloatFilter<"fields"> | number
    h?: FloatFilter<"fields"> | number
    w?: FloatFilter<"fields"> | number
    createdAt?: DateTimeFilter<"fields"> | Date | string
    updatedAt?: DateTimeFilter<"fields"> | Date | string
    sectionId?: IntNullableFilter<"fields"> | number | null
    sheet?: XOR<SheetsScalarRelationFilter, sheetsWhereInput>
    sections?: XOR<SectionsNullableScalarRelationFilter, sectionsWhereInput> | null
  }, "id">

  export type fieldsOrderByWithAggregationInput = {
    id?: SortOrder
    sheetId?: SortOrder
    name?: SortOrder
    value?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    x?: SortOrder
    y?: SortOrder
    h?: SortOrder
    w?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sectionId?: SortOrderInput | SortOrder
    _count?: fieldsCountOrderByAggregateInput
    _avg?: fieldsAvgOrderByAggregateInput
    _max?: fieldsMaxOrderByAggregateInput
    _min?: fieldsMinOrderByAggregateInput
    _sum?: fieldsSumOrderByAggregateInput
  }

  export type fieldsScalarWhereWithAggregatesInput = {
    AND?: fieldsScalarWhereWithAggregatesInput | fieldsScalarWhereWithAggregatesInput[]
    OR?: fieldsScalarWhereWithAggregatesInput[]
    NOT?: fieldsScalarWhereWithAggregatesInput | fieldsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"fields"> | number
    sheetId?: IntWithAggregatesFilter<"fields"> | number
    name?: StringWithAggregatesFilter<"fields"> | string
    value?: StringNullableWithAggregatesFilter<"fields"> | string | null
    color?: StringNullableWithAggregatesFilter<"fields"> | string | null
    type?: StringNullableWithAggregatesFilter<"fields"> | string | null
    x?: FloatWithAggregatesFilter<"fields"> | number
    y?: FloatWithAggregatesFilter<"fields"> | number
    h?: FloatWithAggregatesFilter<"fields"> | number
    w?: FloatWithAggregatesFilter<"fields"> | number
    createdAt?: DateTimeWithAggregatesFilter<"fields"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"fields"> | Date | string
    sectionId?: IntNullableWithAggregatesFilter<"fields"> | number | null
  }

  export type usersCreateInput = {
    email: string
    password: string
    name: string
    recoveryTokens?: usersCreaterecoveryTokensInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    PasswordResetToken?: password_reset_tokensCreateNestedManyWithoutUserInput
    sheets?: sheetsCreateNestedManyWithoutUserInput
    sections?: sectionsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    recoveryTokens?: usersCreaterecoveryTokensInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    PasswordResetToken?: password_reset_tokensUncheckedCreateNestedManyWithoutUserInput
    sheets?: sheetsUncheckedCreateNestedManyWithoutUserInput
    sections?: sectionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recoveryTokens?: usersUpdaterecoveryTokensInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PasswordResetToken?: password_reset_tokensUpdateManyWithoutUserNestedInput
    sheets?: sheetsUpdateManyWithoutUserNestedInput
    sections?: sectionsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recoveryTokens?: usersUpdaterecoveryTokensInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PasswordResetToken?: password_reset_tokensUncheckedUpdateManyWithoutUserNestedInput
    sheets?: sheetsUncheckedUpdateManyWithoutUserNestedInput
    sections?: sectionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    recoveryTokens?: usersCreaterecoveryTokensInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recoveryTokens?: usersUpdaterecoveryTokensInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recoveryTokens?: usersUpdaterecoveryTokensInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_reset_tokensCreateInput = {
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: usersCreateNestedOneWithoutPasswordResetTokenInput
  }

  export type password_reset_tokensUncheckedCreateInput = {
    id?: number
    token: string
    userId: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type password_reset_tokensUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutPasswordResetTokenNestedInput
  }

  export type password_reset_tokensUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_reset_tokensCreateManyInput = {
    id?: number
    token: string
    userId: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type password_reset_tokensUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_reset_tokensUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sheetsCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: usersCreateNestedOneWithoutSheetsInput
    Fields?: fieldsCreateNestedManyWithoutSheetInput
    sections?: sectionsCreateNestedManyWithoutSheetInput
  }

  export type sheetsUncheckedCreateInput = {
    id?: number
    name: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Fields?: fieldsUncheckedCreateNestedManyWithoutSheetInput
    sections?: sectionsUncheckedCreateNestedManyWithoutSheetInput
  }

  export type sheetsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutSheetsNestedInput
    Fields?: fieldsUpdateManyWithoutSheetNestedInput
    sections?: sectionsUpdateManyWithoutSheetNestedInput
  }

  export type sheetsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Fields?: fieldsUncheckedUpdateManyWithoutSheetNestedInput
    sections?: sectionsUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type sheetsCreateManyInput = {
    id?: number
    name: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sheetsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sheetsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sectionsCreateInput = {
    name: string
    sheet: sheetsCreateNestedOneWithoutSectionsInput
    user: usersCreateNestedOneWithoutSectionsInput
    Fields?: fieldsCreateNestedManyWithoutSectionsInput
  }

  export type sectionsUncheckedCreateInput = {
    id?: number
    name: string
    userId: number
    sheetId: number
    Fields?: fieldsUncheckedCreateNestedManyWithoutSectionsInput
  }

  export type sectionsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    sheet?: sheetsUpdateOneRequiredWithoutSectionsNestedInput
    user?: usersUpdateOneRequiredWithoutSectionsNestedInput
    Fields?: fieldsUpdateManyWithoutSectionsNestedInput
  }

  export type sectionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    sheetId?: IntFieldUpdateOperationsInput | number
    Fields?: fieldsUncheckedUpdateManyWithoutSectionsNestedInput
  }

  export type sectionsCreateManyInput = {
    id?: number
    name: string
    userId: number
    sheetId: number
  }

  export type sectionsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type sectionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    sheetId?: IntFieldUpdateOperationsInput | number
  }

  export type fieldsCreateInput = {
    name: string
    value?: string | null
    color?: string | null
    type?: string | null
    x?: number
    y?: number
    h?: number
    w?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sheet: sheetsCreateNestedOneWithoutFieldsInput
    sections?: sectionsCreateNestedOneWithoutFieldsInput
  }

  export type fieldsUncheckedCreateInput = {
    id?: number
    sheetId: number
    name: string
    value?: string | null
    color?: string | null
    type?: string | null
    x?: number
    y?: number
    h?: number
    w?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId?: number | null
  }

  export type fieldsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    h?: FloatFieldUpdateOperationsInput | number
    w?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sheet?: sheetsUpdateOneRequiredWithoutFieldsNestedInput
    sections?: sectionsUpdateOneWithoutFieldsNestedInput
  }

  export type fieldsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sheetId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    h?: FloatFieldUpdateOperationsInput | number
    w?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type fieldsCreateManyInput = {
    id?: number
    sheetId: number
    name: string
    value?: string | null
    color?: string | null
    type?: string | null
    x?: number
    y?: number
    h?: number
    w?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId?: number | null
  }

  export type fieldsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    h?: FloatFieldUpdateOperationsInput | number
    w?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fieldsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sheetId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    h?: FloatFieldUpdateOperationsInput | number
    w?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type Password_reset_tokensListRelationFilter = {
    every?: password_reset_tokensWhereInput
    some?: password_reset_tokensWhereInput
    none?: password_reset_tokensWhereInput
  }

  export type SheetsListRelationFilter = {
    every?: sheetsWhereInput
    some?: sheetsWhereInput
    none?: sheetsWhereInput
  }

  export type SectionsListRelationFilter = {
    every?: sectionsWhereInput
    some?: sectionsWhereInput
    none?: sectionsWhereInput
  }

  export type password_reset_tokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sheetsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sectionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    recoveryTokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type password_reset_tokensCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type password_reset_tokensAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type password_reset_tokensMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type password_reset_tokensMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type password_reset_tokensSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FieldsListRelationFilter = {
    every?: fieldsWhereInput
    some?: fieldsWhereInput
    none?: fieldsWhereInput
  }

  export type fieldsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sheetsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sheetsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type sheetsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sheetsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sheetsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SheetsScalarRelationFilter = {
    is?: sheetsWhereInput
    isNot?: sheetsWhereInput
  }

  export type sectionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrder
  }

  export type sectionsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrder
  }

  export type sectionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrder
  }

  export type sectionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrder
  }

  export type sectionsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SectionsNullableScalarRelationFilter = {
    is?: sectionsWhereInput | null
    isNot?: sectionsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type fieldsCountOrderByAggregateInput = {
    id?: SortOrder
    sheetId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    color?: SortOrder
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    h?: SortOrder
    w?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sectionId?: SortOrder
  }

  export type fieldsAvgOrderByAggregateInput = {
    id?: SortOrder
    sheetId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    h?: SortOrder
    w?: SortOrder
    sectionId?: SortOrder
  }

  export type fieldsMaxOrderByAggregateInput = {
    id?: SortOrder
    sheetId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    color?: SortOrder
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    h?: SortOrder
    w?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sectionId?: SortOrder
  }

  export type fieldsMinOrderByAggregateInput = {
    id?: SortOrder
    sheetId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    color?: SortOrder
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    h?: SortOrder
    w?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sectionId?: SortOrder
  }

  export type fieldsSumOrderByAggregateInput = {
    id?: SortOrder
    sheetId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    h?: SortOrder
    w?: SortOrder
    sectionId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type usersCreaterecoveryTokensInput = {
    set: string[]
  }

  export type password_reset_tokensCreateNestedManyWithoutUserInput = {
    create?: XOR<password_reset_tokensCreateWithoutUserInput, password_reset_tokensUncheckedCreateWithoutUserInput> | password_reset_tokensCreateWithoutUserInput[] | password_reset_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_reset_tokensCreateOrConnectWithoutUserInput | password_reset_tokensCreateOrConnectWithoutUserInput[]
    createMany?: password_reset_tokensCreateManyUserInputEnvelope
    connect?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
  }

  export type sheetsCreateNestedManyWithoutUserInput = {
    create?: XOR<sheetsCreateWithoutUserInput, sheetsUncheckedCreateWithoutUserInput> | sheetsCreateWithoutUserInput[] | sheetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sheetsCreateOrConnectWithoutUserInput | sheetsCreateOrConnectWithoutUserInput[]
    createMany?: sheetsCreateManyUserInputEnvelope
    connect?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
  }

  export type sectionsCreateNestedManyWithoutUserInput = {
    create?: XOR<sectionsCreateWithoutUserInput, sectionsUncheckedCreateWithoutUserInput> | sectionsCreateWithoutUserInput[] | sectionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sectionsCreateOrConnectWithoutUserInput | sectionsCreateOrConnectWithoutUserInput[]
    createMany?: sectionsCreateManyUserInputEnvelope
    connect?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
  }

  export type password_reset_tokensUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<password_reset_tokensCreateWithoutUserInput, password_reset_tokensUncheckedCreateWithoutUserInput> | password_reset_tokensCreateWithoutUserInput[] | password_reset_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_reset_tokensCreateOrConnectWithoutUserInput | password_reset_tokensCreateOrConnectWithoutUserInput[]
    createMany?: password_reset_tokensCreateManyUserInputEnvelope
    connect?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
  }

  export type sheetsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<sheetsCreateWithoutUserInput, sheetsUncheckedCreateWithoutUserInput> | sheetsCreateWithoutUserInput[] | sheetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sheetsCreateOrConnectWithoutUserInput | sheetsCreateOrConnectWithoutUserInput[]
    createMany?: sheetsCreateManyUserInputEnvelope
    connect?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
  }

  export type sectionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<sectionsCreateWithoutUserInput, sectionsUncheckedCreateWithoutUserInput> | sectionsCreateWithoutUserInput[] | sectionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sectionsCreateOrConnectWithoutUserInput | sectionsCreateOrConnectWithoutUserInput[]
    createMany?: sectionsCreateManyUserInputEnvelope
    connect?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type usersUpdaterecoveryTokensInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type password_reset_tokensUpdateManyWithoutUserNestedInput = {
    create?: XOR<password_reset_tokensCreateWithoutUserInput, password_reset_tokensUncheckedCreateWithoutUserInput> | password_reset_tokensCreateWithoutUserInput[] | password_reset_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_reset_tokensCreateOrConnectWithoutUserInput | password_reset_tokensCreateOrConnectWithoutUserInput[]
    upsert?: password_reset_tokensUpsertWithWhereUniqueWithoutUserInput | password_reset_tokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: password_reset_tokensCreateManyUserInputEnvelope
    set?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    disconnect?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    delete?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    connect?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    update?: password_reset_tokensUpdateWithWhereUniqueWithoutUserInput | password_reset_tokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: password_reset_tokensUpdateManyWithWhereWithoutUserInput | password_reset_tokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: password_reset_tokensScalarWhereInput | password_reset_tokensScalarWhereInput[]
  }

  export type sheetsUpdateManyWithoutUserNestedInput = {
    create?: XOR<sheetsCreateWithoutUserInput, sheetsUncheckedCreateWithoutUserInput> | sheetsCreateWithoutUserInput[] | sheetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sheetsCreateOrConnectWithoutUserInput | sheetsCreateOrConnectWithoutUserInput[]
    upsert?: sheetsUpsertWithWhereUniqueWithoutUserInput | sheetsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sheetsCreateManyUserInputEnvelope
    set?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    disconnect?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    delete?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    connect?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    update?: sheetsUpdateWithWhereUniqueWithoutUserInput | sheetsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sheetsUpdateManyWithWhereWithoutUserInput | sheetsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sheetsScalarWhereInput | sheetsScalarWhereInput[]
  }

  export type sectionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<sectionsCreateWithoutUserInput, sectionsUncheckedCreateWithoutUserInput> | sectionsCreateWithoutUserInput[] | sectionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sectionsCreateOrConnectWithoutUserInput | sectionsCreateOrConnectWithoutUserInput[]
    upsert?: sectionsUpsertWithWhereUniqueWithoutUserInput | sectionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sectionsCreateManyUserInputEnvelope
    set?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    disconnect?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    delete?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    connect?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    update?: sectionsUpdateWithWhereUniqueWithoutUserInput | sectionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sectionsUpdateManyWithWhereWithoutUserInput | sectionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sectionsScalarWhereInput | sectionsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type password_reset_tokensUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<password_reset_tokensCreateWithoutUserInput, password_reset_tokensUncheckedCreateWithoutUserInput> | password_reset_tokensCreateWithoutUserInput[] | password_reset_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_reset_tokensCreateOrConnectWithoutUserInput | password_reset_tokensCreateOrConnectWithoutUserInput[]
    upsert?: password_reset_tokensUpsertWithWhereUniqueWithoutUserInput | password_reset_tokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: password_reset_tokensCreateManyUserInputEnvelope
    set?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    disconnect?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    delete?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    connect?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    update?: password_reset_tokensUpdateWithWhereUniqueWithoutUserInput | password_reset_tokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: password_reset_tokensUpdateManyWithWhereWithoutUserInput | password_reset_tokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: password_reset_tokensScalarWhereInput | password_reset_tokensScalarWhereInput[]
  }

  export type sheetsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<sheetsCreateWithoutUserInput, sheetsUncheckedCreateWithoutUserInput> | sheetsCreateWithoutUserInput[] | sheetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sheetsCreateOrConnectWithoutUserInput | sheetsCreateOrConnectWithoutUserInput[]
    upsert?: sheetsUpsertWithWhereUniqueWithoutUserInput | sheetsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sheetsCreateManyUserInputEnvelope
    set?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    disconnect?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    delete?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    connect?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    update?: sheetsUpdateWithWhereUniqueWithoutUserInput | sheetsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sheetsUpdateManyWithWhereWithoutUserInput | sheetsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sheetsScalarWhereInput | sheetsScalarWhereInput[]
  }

  export type sectionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<sectionsCreateWithoutUserInput, sectionsUncheckedCreateWithoutUserInput> | sectionsCreateWithoutUserInput[] | sectionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sectionsCreateOrConnectWithoutUserInput | sectionsCreateOrConnectWithoutUserInput[]
    upsert?: sectionsUpsertWithWhereUniqueWithoutUserInput | sectionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sectionsCreateManyUserInputEnvelope
    set?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    disconnect?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    delete?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    connect?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    update?: sectionsUpdateWithWhereUniqueWithoutUserInput | sectionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sectionsUpdateManyWithWhereWithoutUserInput | sectionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sectionsScalarWhereInput | sectionsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutPasswordResetTokenInput = {
    create?: XOR<usersCreateWithoutPasswordResetTokenInput, usersUncheckedCreateWithoutPasswordResetTokenInput>
    connectOrCreate?: usersCreateOrConnectWithoutPasswordResetTokenInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutPasswordResetTokenNestedInput = {
    create?: XOR<usersCreateWithoutPasswordResetTokenInput, usersUncheckedCreateWithoutPasswordResetTokenInput>
    connectOrCreate?: usersCreateOrConnectWithoutPasswordResetTokenInput
    upsert?: usersUpsertWithoutPasswordResetTokenInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPasswordResetTokenInput, usersUpdateWithoutPasswordResetTokenInput>, usersUncheckedUpdateWithoutPasswordResetTokenInput>
  }

  export type usersCreateNestedOneWithoutSheetsInput = {
    create?: XOR<usersCreateWithoutSheetsInput, usersUncheckedCreateWithoutSheetsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSheetsInput
    connect?: usersWhereUniqueInput
  }

  export type fieldsCreateNestedManyWithoutSheetInput = {
    create?: XOR<fieldsCreateWithoutSheetInput, fieldsUncheckedCreateWithoutSheetInput> | fieldsCreateWithoutSheetInput[] | fieldsUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: fieldsCreateOrConnectWithoutSheetInput | fieldsCreateOrConnectWithoutSheetInput[]
    createMany?: fieldsCreateManySheetInputEnvelope
    connect?: fieldsWhereUniqueInput | fieldsWhereUniqueInput[]
  }

  export type sectionsCreateNestedManyWithoutSheetInput = {
    create?: XOR<sectionsCreateWithoutSheetInput, sectionsUncheckedCreateWithoutSheetInput> | sectionsCreateWithoutSheetInput[] | sectionsUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: sectionsCreateOrConnectWithoutSheetInput | sectionsCreateOrConnectWithoutSheetInput[]
    createMany?: sectionsCreateManySheetInputEnvelope
    connect?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
  }

  export type fieldsUncheckedCreateNestedManyWithoutSheetInput = {
    create?: XOR<fieldsCreateWithoutSheetInput, fieldsUncheckedCreateWithoutSheetInput> | fieldsCreateWithoutSheetInput[] | fieldsUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: fieldsCreateOrConnectWithoutSheetInput | fieldsCreateOrConnectWithoutSheetInput[]
    createMany?: fieldsCreateManySheetInputEnvelope
    connect?: fieldsWhereUniqueInput | fieldsWhereUniqueInput[]
  }

  export type sectionsUncheckedCreateNestedManyWithoutSheetInput = {
    create?: XOR<sectionsCreateWithoutSheetInput, sectionsUncheckedCreateWithoutSheetInput> | sectionsCreateWithoutSheetInput[] | sectionsUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: sectionsCreateOrConnectWithoutSheetInput | sectionsCreateOrConnectWithoutSheetInput[]
    createMany?: sectionsCreateManySheetInputEnvelope
    connect?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutSheetsNestedInput = {
    create?: XOR<usersCreateWithoutSheetsInput, usersUncheckedCreateWithoutSheetsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSheetsInput
    upsert?: usersUpsertWithoutSheetsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSheetsInput, usersUpdateWithoutSheetsInput>, usersUncheckedUpdateWithoutSheetsInput>
  }

  export type fieldsUpdateManyWithoutSheetNestedInput = {
    create?: XOR<fieldsCreateWithoutSheetInput, fieldsUncheckedCreateWithoutSheetInput> | fieldsCreateWithoutSheetInput[] | fieldsUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: fieldsCreateOrConnectWithoutSheetInput | fieldsCreateOrConnectWithoutSheetInput[]
    upsert?: fieldsUpsertWithWhereUniqueWithoutSheetInput | fieldsUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: fieldsCreateManySheetInputEnvelope
    set?: fieldsWhereUniqueInput | fieldsWhereUniqueInput[]
    disconnect?: fieldsWhereUniqueInput | fieldsWhereUniqueInput[]
    delete?: fieldsWhereUniqueInput | fieldsWhereUniqueInput[]
    connect?: fieldsWhereUniqueInput | fieldsWhereUniqueInput[]
    update?: fieldsUpdateWithWhereUniqueWithoutSheetInput | fieldsUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: fieldsUpdateManyWithWhereWithoutSheetInput | fieldsUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: fieldsScalarWhereInput | fieldsScalarWhereInput[]
  }

  export type sectionsUpdateManyWithoutSheetNestedInput = {
    create?: XOR<sectionsCreateWithoutSheetInput, sectionsUncheckedCreateWithoutSheetInput> | sectionsCreateWithoutSheetInput[] | sectionsUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: sectionsCreateOrConnectWithoutSheetInput | sectionsCreateOrConnectWithoutSheetInput[]
    upsert?: sectionsUpsertWithWhereUniqueWithoutSheetInput | sectionsUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: sectionsCreateManySheetInputEnvelope
    set?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    disconnect?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    delete?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    connect?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    update?: sectionsUpdateWithWhereUniqueWithoutSheetInput | sectionsUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: sectionsUpdateManyWithWhereWithoutSheetInput | sectionsUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: sectionsScalarWhereInput | sectionsScalarWhereInput[]
  }

  export type fieldsUncheckedUpdateManyWithoutSheetNestedInput = {
    create?: XOR<fieldsCreateWithoutSheetInput, fieldsUncheckedCreateWithoutSheetInput> | fieldsCreateWithoutSheetInput[] | fieldsUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: fieldsCreateOrConnectWithoutSheetInput | fieldsCreateOrConnectWithoutSheetInput[]
    upsert?: fieldsUpsertWithWhereUniqueWithoutSheetInput | fieldsUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: fieldsCreateManySheetInputEnvelope
    set?: fieldsWhereUniqueInput | fieldsWhereUniqueInput[]
    disconnect?: fieldsWhereUniqueInput | fieldsWhereUniqueInput[]
    delete?: fieldsWhereUniqueInput | fieldsWhereUniqueInput[]
    connect?: fieldsWhereUniqueInput | fieldsWhereUniqueInput[]
    update?: fieldsUpdateWithWhereUniqueWithoutSheetInput | fieldsUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: fieldsUpdateManyWithWhereWithoutSheetInput | fieldsUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: fieldsScalarWhereInput | fieldsScalarWhereInput[]
  }

  export type sectionsUncheckedUpdateManyWithoutSheetNestedInput = {
    create?: XOR<sectionsCreateWithoutSheetInput, sectionsUncheckedCreateWithoutSheetInput> | sectionsCreateWithoutSheetInput[] | sectionsUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: sectionsCreateOrConnectWithoutSheetInput | sectionsCreateOrConnectWithoutSheetInput[]
    upsert?: sectionsUpsertWithWhereUniqueWithoutSheetInput | sectionsUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: sectionsCreateManySheetInputEnvelope
    set?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    disconnect?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    delete?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    connect?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    update?: sectionsUpdateWithWhereUniqueWithoutSheetInput | sectionsUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: sectionsUpdateManyWithWhereWithoutSheetInput | sectionsUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: sectionsScalarWhereInput | sectionsScalarWhereInput[]
  }

  export type sheetsCreateNestedOneWithoutSectionsInput = {
    create?: XOR<sheetsCreateWithoutSectionsInput, sheetsUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: sheetsCreateOrConnectWithoutSectionsInput
    connect?: sheetsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutSectionsInput = {
    create?: XOR<usersCreateWithoutSectionsInput, usersUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSectionsInput
    connect?: usersWhereUniqueInput
  }

  export type fieldsCreateNestedManyWithoutSectionsInput = {
    create?: XOR<fieldsCreateWithoutSectionsInput, fieldsUncheckedCreateWithoutSectionsInput> | fieldsCreateWithoutSectionsInput[] | fieldsUncheckedCreateWithoutSectionsInput[]
    connectOrCreate?: fieldsCreateOrConnectWithoutSectionsInput | fieldsCreateOrConnectWithoutSectionsInput[]
    createMany?: fieldsCreateManySectionsInputEnvelope
    connect?: fieldsWhereUniqueInput | fieldsWhereUniqueInput[]
  }

  export type fieldsUncheckedCreateNestedManyWithoutSectionsInput = {
    create?: XOR<fieldsCreateWithoutSectionsInput, fieldsUncheckedCreateWithoutSectionsInput> | fieldsCreateWithoutSectionsInput[] | fieldsUncheckedCreateWithoutSectionsInput[]
    connectOrCreate?: fieldsCreateOrConnectWithoutSectionsInput | fieldsCreateOrConnectWithoutSectionsInput[]
    createMany?: fieldsCreateManySectionsInputEnvelope
    connect?: fieldsWhereUniqueInput | fieldsWhereUniqueInput[]
  }

  export type sheetsUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<sheetsCreateWithoutSectionsInput, sheetsUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: sheetsCreateOrConnectWithoutSectionsInput
    upsert?: sheetsUpsertWithoutSectionsInput
    connect?: sheetsWhereUniqueInput
    update?: XOR<XOR<sheetsUpdateToOneWithWhereWithoutSectionsInput, sheetsUpdateWithoutSectionsInput>, sheetsUncheckedUpdateWithoutSectionsInput>
  }

  export type usersUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<usersCreateWithoutSectionsInput, usersUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSectionsInput
    upsert?: usersUpsertWithoutSectionsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSectionsInput, usersUpdateWithoutSectionsInput>, usersUncheckedUpdateWithoutSectionsInput>
  }

  export type fieldsUpdateManyWithoutSectionsNestedInput = {
    create?: XOR<fieldsCreateWithoutSectionsInput, fieldsUncheckedCreateWithoutSectionsInput> | fieldsCreateWithoutSectionsInput[] | fieldsUncheckedCreateWithoutSectionsInput[]
    connectOrCreate?: fieldsCreateOrConnectWithoutSectionsInput | fieldsCreateOrConnectWithoutSectionsInput[]
    upsert?: fieldsUpsertWithWhereUniqueWithoutSectionsInput | fieldsUpsertWithWhereUniqueWithoutSectionsInput[]
    createMany?: fieldsCreateManySectionsInputEnvelope
    set?: fieldsWhereUniqueInput | fieldsWhereUniqueInput[]
    disconnect?: fieldsWhereUniqueInput | fieldsWhereUniqueInput[]
    delete?: fieldsWhereUniqueInput | fieldsWhereUniqueInput[]
    connect?: fieldsWhereUniqueInput | fieldsWhereUniqueInput[]
    update?: fieldsUpdateWithWhereUniqueWithoutSectionsInput | fieldsUpdateWithWhereUniqueWithoutSectionsInput[]
    updateMany?: fieldsUpdateManyWithWhereWithoutSectionsInput | fieldsUpdateManyWithWhereWithoutSectionsInput[]
    deleteMany?: fieldsScalarWhereInput | fieldsScalarWhereInput[]
  }

  export type fieldsUncheckedUpdateManyWithoutSectionsNestedInput = {
    create?: XOR<fieldsCreateWithoutSectionsInput, fieldsUncheckedCreateWithoutSectionsInput> | fieldsCreateWithoutSectionsInput[] | fieldsUncheckedCreateWithoutSectionsInput[]
    connectOrCreate?: fieldsCreateOrConnectWithoutSectionsInput | fieldsCreateOrConnectWithoutSectionsInput[]
    upsert?: fieldsUpsertWithWhereUniqueWithoutSectionsInput | fieldsUpsertWithWhereUniqueWithoutSectionsInput[]
    createMany?: fieldsCreateManySectionsInputEnvelope
    set?: fieldsWhereUniqueInput | fieldsWhereUniqueInput[]
    disconnect?: fieldsWhereUniqueInput | fieldsWhereUniqueInput[]
    delete?: fieldsWhereUniqueInput | fieldsWhereUniqueInput[]
    connect?: fieldsWhereUniqueInput | fieldsWhereUniqueInput[]
    update?: fieldsUpdateWithWhereUniqueWithoutSectionsInput | fieldsUpdateWithWhereUniqueWithoutSectionsInput[]
    updateMany?: fieldsUpdateManyWithWhereWithoutSectionsInput | fieldsUpdateManyWithWhereWithoutSectionsInput[]
    deleteMany?: fieldsScalarWhereInput | fieldsScalarWhereInput[]
  }

  export type sheetsCreateNestedOneWithoutFieldsInput = {
    create?: XOR<sheetsCreateWithoutFieldsInput, sheetsUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: sheetsCreateOrConnectWithoutFieldsInput
    connect?: sheetsWhereUniqueInput
  }

  export type sectionsCreateNestedOneWithoutFieldsInput = {
    create?: XOR<sectionsCreateWithoutFieldsInput, sectionsUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: sectionsCreateOrConnectWithoutFieldsInput
    connect?: sectionsWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type sheetsUpdateOneRequiredWithoutFieldsNestedInput = {
    create?: XOR<sheetsCreateWithoutFieldsInput, sheetsUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: sheetsCreateOrConnectWithoutFieldsInput
    upsert?: sheetsUpsertWithoutFieldsInput
    connect?: sheetsWhereUniqueInput
    update?: XOR<XOR<sheetsUpdateToOneWithWhereWithoutFieldsInput, sheetsUpdateWithoutFieldsInput>, sheetsUncheckedUpdateWithoutFieldsInput>
  }

  export type sectionsUpdateOneWithoutFieldsNestedInput = {
    create?: XOR<sectionsCreateWithoutFieldsInput, sectionsUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: sectionsCreateOrConnectWithoutFieldsInput
    upsert?: sectionsUpsertWithoutFieldsInput
    disconnect?: sectionsWhereInput | boolean
    delete?: sectionsWhereInput | boolean
    connect?: sectionsWhereUniqueInput
    update?: XOR<XOR<sectionsUpdateToOneWithWhereWithoutFieldsInput, sectionsUpdateWithoutFieldsInput>, sectionsUncheckedUpdateWithoutFieldsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type password_reset_tokensCreateWithoutUserInput = {
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type password_reset_tokensUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type password_reset_tokensCreateOrConnectWithoutUserInput = {
    where: password_reset_tokensWhereUniqueInput
    create: XOR<password_reset_tokensCreateWithoutUserInput, password_reset_tokensUncheckedCreateWithoutUserInput>
  }

  export type password_reset_tokensCreateManyUserInputEnvelope = {
    data: password_reset_tokensCreateManyUserInput | password_reset_tokensCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type sheetsCreateWithoutUserInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Fields?: fieldsCreateNestedManyWithoutSheetInput
    sections?: sectionsCreateNestedManyWithoutSheetInput
  }

  export type sheetsUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Fields?: fieldsUncheckedCreateNestedManyWithoutSheetInput
    sections?: sectionsUncheckedCreateNestedManyWithoutSheetInput
  }

  export type sheetsCreateOrConnectWithoutUserInput = {
    where: sheetsWhereUniqueInput
    create: XOR<sheetsCreateWithoutUserInput, sheetsUncheckedCreateWithoutUserInput>
  }

  export type sheetsCreateManyUserInputEnvelope = {
    data: sheetsCreateManyUserInput | sheetsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type sectionsCreateWithoutUserInput = {
    name: string
    sheet: sheetsCreateNestedOneWithoutSectionsInput
    Fields?: fieldsCreateNestedManyWithoutSectionsInput
  }

  export type sectionsUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    sheetId: number
    Fields?: fieldsUncheckedCreateNestedManyWithoutSectionsInput
  }

  export type sectionsCreateOrConnectWithoutUserInput = {
    where: sectionsWhereUniqueInput
    create: XOR<sectionsCreateWithoutUserInput, sectionsUncheckedCreateWithoutUserInput>
  }

  export type sectionsCreateManyUserInputEnvelope = {
    data: sectionsCreateManyUserInput | sectionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type password_reset_tokensUpsertWithWhereUniqueWithoutUserInput = {
    where: password_reset_tokensWhereUniqueInput
    update: XOR<password_reset_tokensUpdateWithoutUserInput, password_reset_tokensUncheckedUpdateWithoutUserInput>
    create: XOR<password_reset_tokensCreateWithoutUserInput, password_reset_tokensUncheckedCreateWithoutUserInput>
  }

  export type password_reset_tokensUpdateWithWhereUniqueWithoutUserInput = {
    where: password_reset_tokensWhereUniqueInput
    data: XOR<password_reset_tokensUpdateWithoutUserInput, password_reset_tokensUncheckedUpdateWithoutUserInput>
  }

  export type password_reset_tokensUpdateManyWithWhereWithoutUserInput = {
    where: password_reset_tokensScalarWhereInput
    data: XOR<password_reset_tokensUpdateManyMutationInput, password_reset_tokensUncheckedUpdateManyWithoutUserInput>
  }

  export type password_reset_tokensScalarWhereInput = {
    AND?: password_reset_tokensScalarWhereInput | password_reset_tokensScalarWhereInput[]
    OR?: password_reset_tokensScalarWhereInput[]
    NOT?: password_reset_tokensScalarWhereInput | password_reset_tokensScalarWhereInput[]
    id?: IntFilter<"password_reset_tokens"> | number
    token?: StringFilter<"password_reset_tokens"> | string
    userId?: IntFilter<"password_reset_tokens"> | number
    expiresAt?: DateTimeFilter<"password_reset_tokens"> | Date | string
    createdAt?: DateTimeFilter<"password_reset_tokens"> | Date | string
  }

  export type sheetsUpsertWithWhereUniqueWithoutUserInput = {
    where: sheetsWhereUniqueInput
    update: XOR<sheetsUpdateWithoutUserInput, sheetsUncheckedUpdateWithoutUserInput>
    create: XOR<sheetsCreateWithoutUserInput, sheetsUncheckedCreateWithoutUserInput>
  }

  export type sheetsUpdateWithWhereUniqueWithoutUserInput = {
    where: sheetsWhereUniqueInput
    data: XOR<sheetsUpdateWithoutUserInput, sheetsUncheckedUpdateWithoutUserInput>
  }

  export type sheetsUpdateManyWithWhereWithoutUserInput = {
    where: sheetsScalarWhereInput
    data: XOR<sheetsUpdateManyMutationInput, sheetsUncheckedUpdateManyWithoutUserInput>
  }

  export type sheetsScalarWhereInput = {
    AND?: sheetsScalarWhereInput | sheetsScalarWhereInput[]
    OR?: sheetsScalarWhereInput[]
    NOT?: sheetsScalarWhereInput | sheetsScalarWhereInput[]
    id?: IntFilter<"sheets"> | number
    name?: StringFilter<"sheets"> | string
    userId?: IntFilter<"sheets"> | number
    createdAt?: DateTimeFilter<"sheets"> | Date | string
    updatedAt?: DateTimeFilter<"sheets"> | Date | string
  }

  export type sectionsUpsertWithWhereUniqueWithoutUserInput = {
    where: sectionsWhereUniqueInput
    update: XOR<sectionsUpdateWithoutUserInput, sectionsUncheckedUpdateWithoutUserInput>
    create: XOR<sectionsCreateWithoutUserInput, sectionsUncheckedCreateWithoutUserInput>
  }

  export type sectionsUpdateWithWhereUniqueWithoutUserInput = {
    where: sectionsWhereUniqueInput
    data: XOR<sectionsUpdateWithoutUserInput, sectionsUncheckedUpdateWithoutUserInput>
  }

  export type sectionsUpdateManyWithWhereWithoutUserInput = {
    where: sectionsScalarWhereInput
    data: XOR<sectionsUpdateManyMutationInput, sectionsUncheckedUpdateManyWithoutUserInput>
  }

  export type sectionsScalarWhereInput = {
    AND?: sectionsScalarWhereInput | sectionsScalarWhereInput[]
    OR?: sectionsScalarWhereInput[]
    NOT?: sectionsScalarWhereInput | sectionsScalarWhereInput[]
    id?: IntFilter<"sections"> | number
    name?: StringFilter<"sections"> | string
    userId?: IntFilter<"sections"> | number
    sheetId?: IntFilter<"sections"> | number
  }

  export type usersCreateWithoutPasswordResetTokenInput = {
    email: string
    password: string
    name: string
    recoveryTokens?: usersCreaterecoveryTokensInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sheets?: sheetsCreateNestedManyWithoutUserInput
    sections?: sectionsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutPasswordResetTokenInput = {
    id?: number
    email: string
    password: string
    name: string
    recoveryTokens?: usersCreaterecoveryTokensInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sheets?: sheetsUncheckedCreateNestedManyWithoutUserInput
    sections?: sectionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutPasswordResetTokenInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPasswordResetTokenInput, usersUncheckedCreateWithoutPasswordResetTokenInput>
  }

  export type usersUpsertWithoutPasswordResetTokenInput = {
    update: XOR<usersUpdateWithoutPasswordResetTokenInput, usersUncheckedUpdateWithoutPasswordResetTokenInput>
    create: XOR<usersCreateWithoutPasswordResetTokenInput, usersUncheckedCreateWithoutPasswordResetTokenInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPasswordResetTokenInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPasswordResetTokenInput, usersUncheckedUpdateWithoutPasswordResetTokenInput>
  }

  export type usersUpdateWithoutPasswordResetTokenInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recoveryTokens?: usersUpdaterecoveryTokensInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sheets?: sheetsUpdateManyWithoutUserNestedInput
    sections?: sectionsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutPasswordResetTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recoveryTokens?: usersUpdaterecoveryTokensInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sheets?: sheetsUncheckedUpdateManyWithoutUserNestedInput
    sections?: sectionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutSheetsInput = {
    email: string
    password: string
    name: string
    recoveryTokens?: usersCreaterecoveryTokensInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    PasswordResetToken?: password_reset_tokensCreateNestedManyWithoutUserInput
    sections?: sectionsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutSheetsInput = {
    id?: number
    email: string
    password: string
    name: string
    recoveryTokens?: usersCreaterecoveryTokensInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    PasswordResetToken?: password_reset_tokensUncheckedCreateNestedManyWithoutUserInput
    sections?: sectionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutSheetsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSheetsInput, usersUncheckedCreateWithoutSheetsInput>
  }

  export type fieldsCreateWithoutSheetInput = {
    name: string
    value?: string | null
    color?: string | null
    type?: string | null
    x?: number
    y?: number
    h?: number
    w?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: sectionsCreateNestedOneWithoutFieldsInput
  }

  export type fieldsUncheckedCreateWithoutSheetInput = {
    id?: number
    name: string
    value?: string | null
    color?: string | null
    type?: string | null
    x?: number
    y?: number
    h?: number
    w?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId?: number | null
  }

  export type fieldsCreateOrConnectWithoutSheetInput = {
    where: fieldsWhereUniqueInput
    create: XOR<fieldsCreateWithoutSheetInput, fieldsUncheckedCreateWithoutSheetInput>
  }

  export type fieldsCreateManySheetInputEnvelope = {
    data: fieldsCreateManySheetInput | fieldsCreateManySheetInput[]
    skipDuplicates?: boolean
  }

  export type sectionsCreateWithoutSheetInput = {
    name: string
    user: usersCreateNestedOneWithoutSectionsInput
    Fields?: fieldsCreateNestedManyWithoutSectionsInput
  }

  export type sectionsUncheckedCreateWithoutSheetInput = {
    id?: number
    name: string
    userId: number
    Fields?: fieldsUncheckedCreateNestedManyWithoutSectionsInput
  }

  export type sectionsCreateOrConnectWithoutSheetInput = {
    where: sectionsWhereUniqueInput
    create: XOR<sectionsCreateWithoutSheetInput, sectionsUncheckedCreateWithoutSheetInput>
  }

  export type sectionsCreateManySheetInputEnvelope = {
    data: sectionsCreateManySheetInput | sectionsCreateManySheetInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutSheetsInput = {
    update: XOR<usersUpdateWithoutSheetsInput, usersUncheckedUpdateWithoutSheetsInput>
    create: XOR<usersCreateWithoutSheetsInput, usersUncheckedCreateWithoutSheetsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSheetsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSheetsInput, usersUncheckedUpdateWithoutSheetsInput>
  }

  export type usersUpdateWithoutSheetsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recoveryTokens?: usersUpdaterecoveryTokensInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PasswordResetToken?: password_reset_tokensUpdateManyWithoutUserNestedInput
    sections?: sectionsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutSheetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recoveryTokens?: usersUpdaterecoveryTokensInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PasswordResetToken?: password_reset_tokensUncheckedUpdateManyWithoutUserNestedInput
    sections?: sectionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type fieldsUpsertWithWhereUniqueWithoutSheetInput = {
    where: fieldsWhereUniqueInput
    update: XOR<fieldsUpdateWithoutSheetInput, fieldsUncheckedUpdateWithoutSheetInput>
    create: XOR<fieldsCreateWithoutSheetInput, fieldsUncheckedCreateWithoutSheetInput>
  }

  export type fieldsUpdateWithWhereUniqueWithoutSheetInput = {
    where: fieldsWhereUniqueInput
    data: XOR<fieldsUpdateWithoutSheetInput, fieldsUncheckedUpdateWithoutSheetInput>
  }

  export type fieldsUpdateManyWithWhereWithoutSheetInput = {
    where: fieldsScalarWhereInput
    data: XOR<fieldsUpdateManyMutationInput, fieldsUncheckedUpdateManyWithoutSheetInput>
  }

  export type fieldsScalarWhereInput = {
    AND?: fieldsScalarWhereInput | fieldsScalarWhereInput[]
    OR?: fieldsScalarWhereInput[]
    NOT?: fieldsScalarWhereInput | fieldsScalarWhereInput[]
    id?: IntFilter<"fields"> | number
    sheetId?: IntFilter<"fields"> | number
    name?: StringFilter<"fields"> | string
    value?: StringNullableFilter<"fields"> | string | null
    color?: StringNullableFilter<"fields"> | string | null
    type?: StringNullableFilter<"fields"> | string | null
    x?: FloatFilter<"fields"> | number
    y?: FloatFilter<"fields"> | number
    h?: FloatFilter<"fields"> | number
    w?: FloatFilter<"fields"> | number
    createdAt?: DateTimeFilter<"fields"> | Date | string
    updatedAt?: DateTimeFilter<"fields"> | Date | string
    sectionId?: IntNullableFilter<"fields"> | number | null
  }

  export type sectionsUpsertWithWhereUniqueWithoutSheetInput = {
    where: sectionsWhereUniqueInput
    update: XOR<sectionsUpdateWithoutSheetInput, sectionsUncheckedUpdateWithoutSheetInput>
    create: XOR<sectionsCreateWithoutSheetInput, sectionsUncheckedCreateWithoutSheetInput>
  }

  export type sectionsUpdateWithWhereUniqueWithoutSheetInput = {
    where: sectionsWhereUniqueInput
    data: XOR<sectionsUpdateWithoutSheetInput, sectionsUncheckedUpdateWithoutSheetInput>
  }

  export type sectionsUpdateManyWithWhereWithoutSheetInput = {
    where: sectionsScalarWhereInput
    data: XOR<sectionsUpdateManyMutationInput, sectionsUncheckedUpdateManyWithoutSheetInput>
  }

  export type sheetsCreateWithoutSectionsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: usersCreateNestedOneWithoutSheetsInput
    Fields?: fieldsCreateNestedManyWithoutSheetInput
  }

  export type sheetsUncheckedCreateWithoutSectionsInput = {
    id?: number
    name: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Fields?: fieldsUncheckedCreateNestedManyWithoutSheetInput
  }

  export type sheetsCreateOrConnectWithoutSectionsInput = {
    where: sheetsWhereUniqueInput
    create: XOR<sheetsCreateWithoutSectionsInput, sheetsUncheckedCreateWithoutSectionsInput>
  }

  export type usersCreateWithoutSectionsInput = {
    email: string
    password: string
    name: string
    recoveryTokens?: usersCreaterecoveryTokensInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    PasswordResetToken?: password_reset_tokensCreateNestedManyWithoutUserInput
    sheets?: sheetsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutSectionsInput = {
    id?: number
    email: string
    password: string
    name: string
    recoveryTokens?: usersCreaterecoveryTokensInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    PasswordResetToken?: password_reset_tokensUncheckedCreateNestedManyWithoutUserInput
    sheets?: sheetsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutSectionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSectionsInput, usersUncheckedCreateWithoutSectionsInput>
  }

  export type fieldsCreateWithoutSectionsInput = {
    name: string
    value?: string | null
    color?: string | null
    type?: string | null
    x?: number
    y?: number
    h?: number
    w?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sheet: sheetsCreateNestedOneWithoutFieldsInput
  }

  export type fieldsUncheckedCreateWithoutSectionsInput = {
    id?: number
    sheetId: number
    name: string
    value?: string | null
    color?: string | null
    type?: string | null
    x?: number
    y?: number
    h?: number
    w?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type fieldsCreateOrConnectWithoutSectionsInput = {
    where: fieldsWhereUniqueInput
    create: XOR<fieldsCreateWithoutSectionsInput, fieldsUncheckedCreateWithoutSectionsInput>
  }

  export type fieldsCreateManySectionsInputEnvelope = {
    data: fieldsCreateManySectionsInput | fieldsCreateManySectionsInput[]
    skipDuplicates?: boolean
  }

  export type sheetsUpsertWithoutSectionsInput = {
    update: XOR<sheetsUpdateWithoutSectionsInput, sheetsUncheckedUpdateWithoutSectionsInput>
    create: XOR<sheetsCreateWithoutSectionsInput, sheetsUncheckedCreateWithoutSectionsInput>
    where?: sheetsWhereInput
  }

  export type sheetsUpdateToOneWithWhereWithoutSectionsInput = {
    where?: sheetsWhereInput
    data: XOR<sheetsUpdateWithoutSectionsInput, sheetsUncheckedUpdateWithoutSectionsInput>
  }

  export type sheetsUpdateWithoutSectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutSheetsNestedInput
    Fields?: fieldsUpdateManyWithoutSheetNestedInput
  }

  export type sheetsUncheckedUpdateWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Fields?: fieldsUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type usersUpsertWithoutSectionsInput = {
    update: XOR<usersUpdateWithoutSectionsInput, usersUncheckedUpdateWithoutSectionsInput>
    create: XOR<usersCreateWithoutSectionsInput, usersUncheckedCreateWithoutSectionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSectionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSectionsInput, usersUncheckedUpdateWithoutSectionsInput>
  }

  export type usersUpdateWithoutSectionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recoveryTokens?: usersUpdaterecoveryTokensInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PasswordResetToken?: password_reset_tokensUpdateManyWithoutUserNestedInput
    sheets?: sheetsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recoveryTokens?: usersUpdaterecoveryTokensInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PasswordResetToken?: password_reset_tokensUncheckedUpdateManyWithoutUserNestedInput
    sheets?: sheetsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type fieldsUpsertWithWhereUniqueWithoutSectionsInput = {
    where: fieldsWhereUniqueInput
    update: XOR<fieldsUpdateWithoutSectionsInput, fieldsUncheckedUpdateWithoutSectionsInput>
    create: XOR<fieldsCreateWithoutSectionsInput, fieldsUncheckedCreateWithoutSectionsInput>
  }

  export type fieldsUpdateWithWhereUniqueWithoutSectionsInput = {
    where: fieldsWhereUniqueInput
    data: XOR<fieldsUpdateWithoutSectionsInput, fieldsUncheckedUpdateWithoutSectionsInput>
  }

  export type fieldsUpdateManyWithWhereWithoutSectionsInput = {
    where: fieldsScalarWhereInput
    data: XOR<fieldsUpdateManyMutationInput, fieldsUncheckedUpdateManyWithoutSectionsInput>
  }

  export type sheetsCreateWithoutFieldsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: usersCreateNestedOneWithoutSheetsInput
    sections?: sectionsCreateNestedManyWithoutSheetInput
  }

  export type sheetsUncheckedCreateWithoutFieldsInput = {
    id?: number
    name: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: sectionsUncheckedCreateNestedManyWithoutSheetInput
  }

  export type sheetsCreateOrConnectWithoutFieldsInput = {
    where: sheetsWhereUniqueInput
    create: XOR<sheetsCreateWithoutFieldsInput, sheetsUncheckedCreateWithoutFieldsInput>
  }

  export type sectionsCreateWithoutFieldsInput = {
    name: string
    sheet: sheetsCreateNestedOneWithoutSectionsInput
    user: usersCreateNestedOneWithoutSectionsInput
  }

  export type sectionsUncheckedCreateWithoutFieldsInput = {
    id?: number
    name: string
    userId: number
    sheetId: number
  }

  export type sectionsCreateOrConnectWithoutFieldsInput = {
    where: sectionsWhereUniqueInput
    create: XOR<sectionsCreateWithoutFieldsInput, sectionsUncheckedCreateWithoutFieldsInput>
  }

  export type sheetsUpsertWithoutFieldsInput = {
    update: XOR<sheetsUpdateWithoutFieldsInput, sheetsUncheckedUpdateWithoutFieldsInput>
    create: XOR<sheetsCreateWithoutFieldsInput, sheetsUncheckedCreateWithoutFieldsInput>
    where?: sheetsWhereInput
  }

  export type sheetsUpdateToOneWithWhereWithoutFieldsInput = {
    where?: sheetsWhereInput
    data: XOR<sheetsUpdateWithoutFieldsInput, sheetsUncheckedUpdateWithoutFieldsInput>
  }

  export type sheetsUpdateWithoutFieldsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutSheetsNestedInput
    sections?: sectionsUpdateManyWithoutSheetNestedInput
  }

  export type sheetsUncheckedUpdateWithoutFieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: sectionsUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type sectionsUpsertWithoutFieldsInput = {
    update: XOR<sectionsUpdateWithoutFieldsInput, sectionsUncheckedUpdateWithoutFieldsInput>
    create: XOR<sectionsCreateWithoutFieldsInput, sectionsUncheckedCreateWithoutFieldsInput>
    where?: sectionsWhereInput
  }

  export type sectionsUpdateToOneWithWhereWithoutFieldsInput = {
    where?: sectionsWhereInput
    data: XOR<sectionsUpdateWithoutFieldsInput, sectionsUncheckedUpdateWithoutFieldsInput>
  }

  export type sectionsUpdateWithoutFieldsInput = {
    name?: StringFieldUpdateOperationsInput | string
    sheet?: sheetsUpdateOneRequiredWithoutSectionsNestedInput
    user?: usersUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type sectionsUncheckedUpdateWithoutFieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    sheetId?: IntFieldUpdateOperationsInput | number
  }

  export type password_reset_tokensCreateManyUserInput = {
    id?: number
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type sheetsCreateManyUserInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sectionsCreateManyUserInput = {
    id?: number
    name: string
    sheetId: number
  }

  export type password_reset_tokensUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_reset_tokensUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_reset_tokensUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sheetsUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Fields?: fieldsUpdateManyWithoutSheetNestedInput
    sections?: sectionsUpdateManyWithoutSheetNestedInput
  }

  export type sheetsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Fields?: fieldsUncheckedUpdateManyWithoutSheetNestedInput
    sections?: sectionsUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type sheetsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sectionsUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    sheet?: sheetsUpdateOneRequiredWithoutSectionsNestedInput
    Fields?: fieldsUpdateManyWithoutSectionsNestedInput
  }

  export type sectionsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sheetId?: IntFieldUpdateOperationsInput | number
    Fields?: fieldsUncheckedUpdateManyWithoutSectionsNestedInput
  }

  export type sectionsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sheetId?: IntFieldUpdateOperationsInput | number
  }

  export type fieldsCreateManySheetInput = {
    id?: number
    name: string
    value?: string | null
    color?: string | null
    type?: string | null
    x?: number
    y?: number
    h?: number
    w?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId?: number | null
  }

  export type sectionsCreateManySheetInput = {
    id?: number
    name: string
    userId: number
  }

  export type fieldsUpdateWithoutSheetInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    h?: FloatFieldUpdateOperationsInput | number
    w?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: sectionsUpdateOneWithoutFieldsNestedInput
  }

  export type fieldsUncheckedUpdateWithoutSheetInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    h?: FloatFieldUpdateOperationsInput | number
    w?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type fieldsUncheckedUpdateManyWithoutSheetInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    h?: FloatFieldUpdateOperationsInput | number
    w?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type sectionsUpdateWithoutSheetInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: usersUpdateOneRequiredWithoutSectionsNestedInput
    Fields?: fieldsUpdateManyWithoutSectionsNestedInput
  }

  export type sectionsUncheckedUpdateWithoutSheetInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    Fields?: fieldsUncheckedUpdateManyWithoutSectionsNestedInput
  }

  export type sectionsUncheckedUpdateManyWithoutSheetInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type fieldsCreateManySectionsInput = {
    id?: number
    sheetId: number
    name: string
    value?: string | null
    color?: string | null
    type?: string | null
    x?: number
    y?: number
    h?: number
    w?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type fieldsUpdateWithoutSectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    h?: FloatFieldUpdateOperationsInput | number
    w?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sheet?: sheetsUpdateOneRequiredWithoutFieldsNestedInput
  }

  export type fieldsUncheckedUpdateWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sheetId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    h?: FloatFieldUpdateOperationsInput | number
    w?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fieldsUncheckedUpdateManyWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sheetId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    h?: FloatFieldUpdateOperationsInput | number
    w?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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