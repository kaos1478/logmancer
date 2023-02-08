export interface IResponseFuncs {
  GET?: Function
  POST?: Function
  PUT?: Function
  DELETE?: Function
}

export interface ILog {
  userId: number
  details: string
}
