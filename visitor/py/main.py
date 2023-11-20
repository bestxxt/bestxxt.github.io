import pymysql
import time
from flask import Flask, request, jsonify
from datetime import datetime
from flask_caching import Cache
import threading


# 路由处理
app = Flask(__name__)

# 定义一个缓存字典
cache = {}

# 打开数据库连接
try:
    db = pymysql.connect(
        host='ius2.bestxxt.link', 
        user='visitor_data', 
        passwd='JcRt7pPwzziAxRC2', 
        database='visitor_data',
        port=3306)
    print('db connected!')
except:
    print('db wrong!')

@app.route('/report', methods=['POST'])
def record_endpoint():
    # 获取POST请求的JSON数据
    request_data = request.get_json()
    print(request_data)
    # 将数据存储到缓存字典中
    cache.update(request_data) 
    #发送响应
    return jsonify({'message': 'successfully'})

def store_data():
    while True:
        time.sleep(1)
        # 在后台任务中从缓存中取出数据并存入数据库
        # 遍历并打印缓存字典中的数据
        # for key, value in cache.items():
        #     print(f'{key}: {value}')
        #     cache.pop(key)

            # # 执行数据库操作，将数据存入数据库
            # with db.cursor() as cursor:
            #     insert_query = "INSERT INTO user_data (ip_addr,userAgent,referer,timestamp) VALUES (%s, %s, %s, %s)"
            #     data = (value['ip'], value['userAgent'], value['referer'], value['timestamp'])
            #     cursor.execute(insert_query, data)
            # 提交事务
            # db.commit()          
            # print('添加成功')
        
       
        

              
            


if __name__ == '__main__':
    thread = threading.Thread(target=app.run, kwargs={'debug': True, 'use_reloader': False})
    thread.start()
    # 在后台执行 store_data()
    store_data_thread = threading.Thread(target=store_data)
    store_data_thread.start()



    

    
