// dynamic-cache.interceptor.ts
import { ExecutionContext, Injectable, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Injectable()
export class DynamicCacheInterceptor extends CacheInterceptor {
  trackBy(context: ExecutionContext): string | undefined {
    const request: Request = context.switchToHttp().getRequest();
    const url = request.route?.path || request.url.split('?')[0];
    const query = request.query;

    const queryKey = Object.keys(query)
      .sort()
      .map((key) => `${key}=${query[key]}`)
      .join('&');

    return `${request.method}:${url}?${queryKey}`;
  }

  intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    return super.intercept(context, next);
  }
}
