import React, { memo } from 'react'
import { Col, Row } from 'antd'
import { Video } from '../../types'

const Info: React.FC<Video> = (video) => {
  return (
    <Row gutter={10}>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <img className="w-full" src={video.vod_pic} alt={`${video.vod_name}封面`} />
      </Col>
      <Col xs={24} sm={12} md={16} lg={18} xl={20 }>
        <Row>
          <Col span={24} className="text-lg font-bold mb-2 truncate">
            {video.vod_name}
          </Col>
          <Col xs={24} md={12}>
            <div className="detail-row">
              <div className="detail-row-label">区域</div>
              <div className="detail-row-content">{video.vod_area}</div>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="detail-row">
              <div className="detail-row-label">语言</div>
              <div className="detail-row-content">{video.vod_lang}</div>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="detail-row">
              <div className="detail-row-label">年份</div>
              <div className="detail-row-content">{video.vod_year}</div>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="detail-row">
              <div className="detail-row-label">分类</div>
              <div className="detail-row-content">{video.type_name}</div>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="detail-row">
              <div className="detail-row-label">更新时间</div>
              <div className="detail-row-content">{video.vod_time}</div>
            </div>
          </Col>
          <Col span={24}>
            <div className="detail-row">
              <div className="detail-row-label">标签</div>
              <div className="detail-row-content" title={video.vod_tag}>
                {video.vod_tag}
              </div>
            </div>
          </Col>
          <Col span={24}>
            <div className="detail-row">
              <div className="detail-row-label">演员</div>
              <div>{video.vod_actor}</div>
            </div>
          </Col>
          <Col span={24}>
            <div className="detail-row">
              <div className="detail-row-label">简介</div>
              <div>{video.vod_content}</div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default memo(Info)
