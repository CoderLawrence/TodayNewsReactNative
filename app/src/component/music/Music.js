import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';

import NavigationBar from '../../common/BaseNavigationBar';
import Constants from '../../common/Constants';

Dimensions = require('Dimensions');
width = Dimensions.get('window').width;
height = Dimensions.get('window').height;

export default class Music extends Component {

    //初始化数据
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: ((r1, r2) => (r1 !== r2)),
                sectionHeaderHasChanged: ((s1, s2) => (s1 !== s2)),
            }),
            load: false
        }
    }

    //渲染界面
    render() {
        //因为数据是异步加载，用load判断是否正在加载
        //如果加载完毕重新刷新界面改变load值
        if (!this.state.load) {
            return <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: width,
                height: height,
                backgroundColor: '#fff'
            }}>
                <Text>加载中...</Text>
            </View>
        }

        return (this.renderView(this.state.dataSource))
    }

  renderView() {
    return (
      <View style={{flex:1, backgroundColor:'#fff'}}>
        <NavigationBar barBackgroundColor={Constants.colors.themeColor}/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderHeader={this.renderHeader.bind(this)}
          renderSeparator={this.renderSeparator}
        />
      </View>
    )
  }
    renderHeader() {
        var artist = this.state.artist;
        return (
            <View style={{flex: 1, height: 70}}>
                <View style={{height: 69.5, flexDirection: 'row'}}>
                    <Image source={{uri: artist.portrait}}
                           style={{width: 50, height: 50, margin: 10, borderRadius: 8}}/>
                    <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
                        <Text style={{fontSize: 16, marginTop: 10}}>
                            {artist.name}
                        </Text>
                        <Text style={{fontSize: 12, color: '#666', marginBottom: 10}}>
                            单曲:{artist.num_tracks} 专辑:{artist.num_albums}
                        </Text>
                    </View>
                </View>
                <View style={{backgroundColor: '#ddd', height: 0.5}}>
                </View>
            </View>
        )
    }

    renderRow(rowData, sectionId, rowId) {
        if (sectionId == 'artists') {
            return (
                <View style={{flex: 1, height: 70}}>
                    <View style={{height: 69.5, flexDirection: 'row'}}>
                        <Image source={{uri: rowData.portrait}}
                               style={{width: 50, height: 50, margin: 10, borderRadius: 8}}/>
                        <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
                            <Text style={{fontSize: 16, marginTop: 10}}>
                                {rowData.name}
                            </Text>
                            <Text style={{fontSize: 12, color: '#666', marginBottom: 10}}>
                                单曲:{rowData.num_tracks} 专辑:{rowData.num_albums}
                            </Text>
                        </View>
                    </View>
                    <View style={{backgroundColor: '#ddd', height: 0.5}}>
                    </View>
                </View>
            );
        } else if (sectionId == 'tracks') {
            var artistNames = rowData.artists.map((artist) => {
                return artist.name;
            })
            return (
                <View style={{flex: 1, height: 58, marginLeft: 10, marginRight: 10, justifyContent: 'space-around'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginTop: 4}}>
                        <Text style={{fontSize: 15}}>
                            {rowData.title}
                        </Text>
                        <View style={{
                            width: 20,
                            height: 15,
                            backgroundColor: '#f34983',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 5,
                            marginLeft: 5
                        }}>
                            <Text style={{fontSize: 10, textAlign: 'justify', color: '#fff'}}>HQ</Text>
                        </View>
                    </View>
                    <Text style={{fontSize: 11, color: '#888', marginBottom: 4}}>
                        {artistNames.join(',')} - {rowData.album.name}
                    </Text>
                </View>
            )
        } else {
            return null;
        }
    }

    renderSeparator(sectionId, rowId) {
        return (
            <View key={`${sectionId}_${rowId}`} style={{backgroundColor: '#ddd', height: 0.5}}>
            </View>
        );
    }

    renderSectionHeader(sectionData, sectionId) {
        console.log(sectionId)
        var title = (sectionId == 'artists') ? '歌手' : '在线歌曲';
        return (
            <View key={sectionId} style={{flex: 1, height: 42, backgroundColor: '#fff'}}>
                <View style={{height: 41.5, flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{backgroundColor: '#f34983', width: 14, height: 14, borderRadius: 7, marginLeft: 10}}>
                    </View>
                    <Text style={{marginLeft: 5, fontSize: 15, color: '#666'}}>
                        {title}
                    </Text>
                </View>
                <View style={{height: 0.5, backgroundColor: '#ddd'}}>
                </View>
            </View>
        );
    }

    didSelectedRow(sectionId, rowId) {
    }

    /**
     * 加载耗时操作
     */
    componentDidMount() {
        this.getDataFromFetch();
    }

    getDataFromFetch() {
        fetch('http://v5.pc.duomi.com/search-ajaxsearch-searchall?kw=%E6%B2%89%E9%BB%98%E6%98%AF%E9%87%91&pi=0&pz=10')//请求地址
            .then((response) => response.json())//取数据
            .then((responseText) => {//处理数据
                //通过setState()方法重新渲染界面
                var data = {
                    'artists': responseText.artists,
                    'tracks': responseText.tracks,
                }
                this.setState({
                    //改变加载ListView
                    load: true,
                    //设置数据源刷新界面
                    dataSource: this.state.dataSource.cloneWithRowsAndSections(data),
                })
            })
            .catch((error) => {
                console.warn(error);
            }).done();
    }
}
