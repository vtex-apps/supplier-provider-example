export async function func(ctx: Context, next: () => Promise<any>) {
  const { vtex } = ctx

  vtex
  ctx.body = { vtex }
  await next()
}
